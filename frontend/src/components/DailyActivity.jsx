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
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#FF0000",
          padding: "10px",
          color: "#FFF",
        }}
      >
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};

const DailyActivityChart = ({ userId }) => {
  const data = getUserActivity(userId);

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#fbfbfb",
        borderRadius: 10,
        paddingTop: 24,
      }}
    >
      <h3
        x={20}
        y={20}
        textAnchor="start"
        dominantBaseline="central"
        style={{
          fontSize: "15px",
          fontWeight: "500",
          marginLeft: "20px",
          marginTop: "0",
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
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={{ stroke: "#DEDEDE" }}
        />
        <YAxis
          yAxisId="left"
          orientation="left"
          dataKey="calories"
          unit="kcal"
          hide="true"
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          yAxisId="right"
          orientation="right"
          dataKey="kilogram"
          domain={[50, 100]}
          tickMargin={20}
          tickCount={3}
        />
        <Tooltip content={<CustomTooltip />} />
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
