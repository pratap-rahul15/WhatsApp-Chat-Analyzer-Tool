
// This component uses Recharts library to display a bar chart of user activity over the last 7 days.
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  
  function Chart({ chartData }) {
    
    return (
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📅 User Activity (Last 7 Days)</h2>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="active_users" name="Active Users" fill="#4285F4" />
            <Bar dataKey="new_users" name="New Users" fill="#FB8C00" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
  
  export default Chart;
