import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import "../styles/DailyActivity.css";
import userActivity from "../data/userActivity.json";

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

const CustomLegend = ({ payload }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      padding: "10px",
      position: "absolute",
      top: 10,
      right: 20,
      zIndex: 10,
    }}
  >
    <ul style={{ display: "flex", listStyle: "none", padding: 0, margin: 0 }}>
      {payload.map((entry, index) => (
        <li
          key={`item-${index}`}
          style={{ marginRight: 20, display: "flex", alignItems: "center" }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              backgroundColor: entry.color,
              borderRadius: "50%",
              display: "inline-block",
              marginRight: 5,
            }}
          ></span>
          <span
            style={{ color: "#74798C", fontWeight: "500", fontSize: "14px" }}
          >
            {entry.value}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const DailyActivityChart = ({ userId }) => {
  const data = getUserActivity(userId);

  return (
    <div className="chart-container" style={{ position: "relative" }}>
      <h3
        x={20}
        y={20}
        textAnchor="start"
        dominantBaseline="central"
        style={{
          fontSize: "15px",
          fontWeight: "500",
          marginLeft: "20px",
        }}
      >
        Activité quotidienne
      </h3>
      <BarChart
        width={835}
        height={320}
        data={data}
        barSize={7}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid horizontal={true} vertical={false} strokeDasharray="3" />
        <XAxis dataKey="day" />
        <YAxis
          yAxisId="left"
          orientation="left"
          dataKey="calories"
          unit="kcal"
          hide="true"
        />
        <YAxis
          axisLine={false}
          yAxisId="right"
          orientation="right"
          dataKey="kilogram"
          unit="kg"
          domain={[50, 100]}
        />
        <Tooltip />
        <Bar
          yAxisId="right"
          dataKey="kilogram"
          fill="#000"
          name="Poids (kg)"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          yAxisId="left"
          dataKey="calories"
          fill="#FF0000"
          radius={[10, 10, 0, 0]}
          name="Calories brûlées (kcal)"
        />
      </BarChart>
      <CustomLegend
        payload={[
          { value: "Poids (kg)", color: "#000" },
          { value: "Calories brûlées (kcal)", color: "#FF0000" },
        ]}
      />
    </div>
  );
};

export default DailyActivityChart;
