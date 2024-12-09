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
        paddingTop: 20,
        paddingBottom: 20,
        color: "#fff",
        borderRadius: "5px",
        height: 223,
      }}
    >
      <h2
        style={{
          width: 148,
          height: 57,
          fontSize: 15,
          margin: 0,
          fontWeight: 500,
          color: " #FFFFFF",
          paddingRight: 20,
        }}
      >
        Durée moyenne des sessions
      </h2>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={sessionsData}>
          <XAxis
            dataKey="day"
            tick={{ fill: "#fff" }}
            padding={{ right: 5, left: 5 }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "black",
              strokeOpacity: 0.08,
              strokeWidth: 30,
            }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SessionChart;
