import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import "../styles/DailyActivity.css"; // Import du fichier CSS
import userActivity from "../data/userActivity.json"; // Import des données

const getUserActivity = (userId) => {
  const user = userActivity.find((user) => user.userId === userId);
  return user
    ? user.sessions.map((session, index) => ({
        day: index + 1,
        kilogram: session.kilogram,
        calories: session.calories,
      }))
    : [];
};

const DailyActivityChart = ({ userId }) => {
  const data = getUserActivity(userId);

  return (
    <div className="chart-container">
      <div className="chart-title">Activité quotidienne</div>
      <BarChart
        width={800}
        height={400}
        data={data}
        barSize={7}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis yAxisId="left" orientation="left" dataKey="kilogram" unit="kg" />
        <YAxis
          yAxisId="right"
          orientation="right"
          dataKey="calories"
          unit="kcal"
        />
        <Tooltip />
        <Legend />
        <Bar
          yAxisId="left"
          dataKey="kilogram"
          fill="#000"
          name="Poids (kg)"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          yAxisId="right"
          dataKey="calories"
          fill="#FF0000"
          radius={[10, 10, 0, 0]}
          name="Calories brûlées (kcal)"
        />
      </BarChart>
    </div>
  );
};

export default DailyActivityChart;
