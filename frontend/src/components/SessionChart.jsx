import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import sessionData from "../data/userAverageSessions.json"; // Importez votre fichier JSON ici

// Composant pour le Tooltip personnalisé
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: "white", padding: 10, borderRadius: 5 }}>
        <p style={{ color: "#000" }}>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

// Composant principal
const SessionChart = ({ userId }) => {
  // Récupérer les données de l'utilisateur correspondant
  const userData = sessionData.find((user) => user.userId === userId);

  // Vérifier si l'utilisateur existe
  if (!userData) {
    return (
      <p style={{ color: "red" }}>
        Aucune donnée trouvée pour l'utilisateur ID: {userId}
      </p>
    );
  }

  // Mapper les données pour les adapter au format du graphique
  const sessionsData = userData.sessions.map((session, index) => ({
    day: ["L", "M", "M", "J", "V", "S", "D"][index],
    sessionLength: session.sessionLength,
  }));

  // Rendu du graphique
  return (
    <div
      style={{
        backgroundColor: "#FF0000",

        padding: 20,
        color: "#fff",
        height: 263,

        borderRadius: "5px",
      }}
    >
      <h2
        style={{
          fontSize: 15,
          marginBottom: 10,
          fontWeight: 500,
          color: " #FFFFFF",
        }}
      >
        Durée moyenne des sessions
      </h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={sessionsData}>
          <XAxis
            dataKey="day"
            tick={{ fill: "#fff" }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            dot={{ stroke: "#fff", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SessionChart;
