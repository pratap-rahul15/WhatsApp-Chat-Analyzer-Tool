import re
from datetime import datetime, timedelta
from collections import defaultdict

# Regular expressions to match the chat log format
LINE_PATTERN = re.compile(r"^(\d{1,2}/\d{1,2}/\d{2}), (\d{1,2}:\d{2}) ?([APMapm]{2}) - (.+?): (.+)$")
JOIN_PATTERN = re.compile(r"added (.+)")
DATE_FORMAT = "%m/%d/%y"

def process_chat(chat_text: str):
    messages_by_day = defaultdict(set)
    joins_by_day = defaultdict(set)
    user_activity_days = defaultdict(set)

    lines = chat_text.splitlines()
    for line in lines:
        
        # Handle new user joins
        if "added" in line:
            try:
                datetime_part, rest = line.split(" - ", 1)
                date_str, time_str_ampm = datetime_part.split(", ")
                date = datetime.strptime(date_str.strip(), DATE_FORMAT).date()
                match = JOIN_PATTERN.search(rest)
                if match:
                    joined_user = match.group(1).strip()
                    joins_by_day[date.isoformat()].add(joined_user)
            except Exception:
                continue

        # Handle normal messages
        else:
            match = LINE_PATTERN.match(line)
            if match:
                date_str, time_str, ampm, sender, message = match.groups()
                try:
                    datetime.strptime(f"{date_str} {time_str} {ampm}", "%m/%d/%y %I:%M %p")  # validate datetime
                    date = datetime.strptime(date_str.strip(), DATE_FORMAT).date()
                    messages_by_day[date.isoformat()].add(sender.strip())
                    user_activity_days[sender.strip()].add(date.isoformat())
                except Exception:
                    continue

    # Get data for the last 7 days
    today = datetime.now().date()
    last_7_days = [(today - timedelta(days=i)).isoformat() for i in range(6, -1, -1)]

    chart_data = []
    for day in last_7_days:
        chart_data.append({
            "date": day,
            "new_users": len(joins_by_day.get(day, [])),
            "active_users": len(messages_by_day.get(day, []))
        })

    # Users active at least 4 days in last 7 days
    active_4_days_users = [
        user for user, days in user_activity_days.items()
        if len(set(days) & set(last_7_days)) >= 4
    ]

    return {
        "chartData": chart_data,
        "active_4_days_users": active_4_days_users
    }
