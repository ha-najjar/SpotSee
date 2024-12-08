import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import userData from "../data/userMainData.json";

const ScoreChart = ({ userId }) => {
  // Trouver les données de l'utilisateur en fonction de l'ID
  const user = userData.find((user) => user.id === userId);

  if (!user) {
    return <div>Utilisateur non trouvé</div>;
  }

  // Récupérer le score de l'utilisateur
  //const score = user.todayScore || user.score;
  //const scorePercentage = (score * 100).toFixed(0);

  // Données pour le graphique en cercle complet
  const data = [
    { value: user.todayScore || user.score },
    { value: 1 - user.todayScore || user.score },
  ];

  //const COLORS = ["#FF0000", "#D3D3D3"];

  return (
    <div
      style={{
        position: "relative",
        padding: "20px",

        height: "263px",
        background: "#FBFBFB",
        borderRadius: "5px",
      }}
    >
      <h2
        style={{
          position: "absolute",
          left: "20%",
          top: "15%",
          transform: "translate(-50%, -50%)",
          fontWeight: "500",
          fontSize: "15px",
          lineHeight: "24px",
          color: "#20253a",
        }}
      >
        Score
      </h2>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            startAngle={90}
            innerRadius={70}
            outerRadius={85}
            dataKey="value"
          >
            {data.map((entry, index) =>
              index === 0 ? (
                <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" />
              ) : (
                <Cell key={`cell-${entry}`} fill="#FBFBFB" />
              )
            )}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "12px",
          lineHeight: "20px",
          fontWeight: "700",
          textAlign: "center",
          color: "#74798c",
          background: "white",
          borderRadius: "50%",
          padding: "2.3rem 2.7rem",
        }}
      >
        <span
          style={{
            color: "rgba(0, 0, 0, 0.8)",
            fontWeight: "700",
            fontSize: "26px",
          }}
        >
          {data[0].value * 100}%<br />
        </span>
        de votre <br /> objectif
      </div>
    </div>
  );
};

export default ScoreChart;
