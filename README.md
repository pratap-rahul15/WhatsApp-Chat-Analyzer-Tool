# **![whatsapp logo](https://github.com/user-attachments/assets/3976de10-3462-443c-94ab-cda3800c261a) WhatsApp Chat Analyzer** 

A full-stack web application to analyze exported WhatsApp group chats. The tool visualizes user activity over the past 7 days and highlights active users in both graphical and tabular formats.

### ✨ Features

**📊 Bar Chart Visualization:** Displays daily active and new users for the past 7 days.

**󰌐 Active User Table:** Lists users active for ≥ 4 days in a clean table.

**📁 File Upload & Parsing:** Upload .txt chat files and instantly get insights.

**⏳ Recent Activity Insights:** See how group activity trends over a week.

### 🪓 Tech Stack

**Frontend:**  React.js (Vite)

**Backend:** Python (FastAPI framework)

**Charting:** Recharts

**Language:** JavaScript, Python

### 🚀 Getting Started

**1. Clone the Repository**

```
git clone https://github.com/pratap-rahul15/WhatsApp-Chat-Analyzer-Tool.git
cd whatsapp-chat-analyzer
```

**2. 🔧 Backend Setup (FastAPI)**

```
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
uvicorn main:app --reload

```
**By default, backend runs at: http://127.0.0.1:8000**

**3. 🖥️ Frontend Setup (React with Vite)**

```
cd frontend
npm install
npm run dev
```
**Frontend will run at: http://localhost:5173**

**4. 📊 Sample Output**

- The bar chart shows daily active vs new users.

- Table listing all users who were active for at least 4 days.

**5. 📖 How to Use This Tool**

- Export a WhatsApp group chat as .txt.

- Click Choose File and upload the .txt file.

- Click Upload & Analyze.

- View the visual insights on the UI.

**6. 💼 License**

MIT License. Feel free to fork, use, or contribute.

![image](https://github.com/user-attachments/assets/bae2c6ce-e262-4b9f-a6ee-286d2467d936)

Made with **❤️** by **Rahul Singh**
