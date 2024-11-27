import React from "react";
import NutritionCard from "./NutritionCard";

// Importez les icônes et les données
import userMainData from "../data/userMainData.json";
import caloriesIcon from "../assets/calories-icon.png";
import proteinIcon from "../assets/protein-icon.png";
import carbsIicon from "../assets/carbs-icon.png";
import fatIcon from "../assets/fat-icon.png";

const NutritionOverview = ({ userId }) => {
  const userData = userMainData.find((user) => user.id === userId);

  if (!userData) {
    return <p>Données utilisateur introuvables.</p>;
  }

  const { keyData } = userData;

  return (
    <div>
      <NutritionCard
        icon={caloriesIcon}
        value={keyData.calorieCount}
        unit="kCal"
        label="Calories"
      />
      <NutritionCard
        icon={proteinIcon}
        value={keyData.proteinCount}
        unit="g"
        label="Proteines"
      />
      <NutritionCard
        icon={carbsIicon}
        value={keyData.carbohydrateCount}
        unit="g"
        label="Glucides"
      />
      <NutritionCard
        icon={fatIcon}
        value={keyData.lipidCount}
        unit="g"
        label="Lipides"
      />
    </div>
  );
};

export default NutritionOverview;
