import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import performanceData from "../data/userPerformance.json";

const PerformanceChart = ({ userId }) => {
  // Trouver les données de l'utilisateur en fonction de l'ID
  const userData = performanceData.find((user) => user.userId === userId);

  if (!userData) {
    return <div>User not found</div>;
  }

  // Transformer les données pour le graphique radar
  const radarData = userData.data.map((item) => ({
    kind: userData.kind[item.kind],
    value: item.value,
  }));

  return (
    <div
      style={{
        backgroundColor: "#282D30",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fontSize: "12px", fontWeight: "500", fill: "#FFFFFF" }}
          />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar
            name="Performance"
            dataKey="value"
            stroke="#FF0101B2"
            fill="#FF0101B2"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
