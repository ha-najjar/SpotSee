import React from "react";
import "../styles/NutritionCard.css";

const NutritionCard = ({ icon, value, unit, label }) => {
  return (
    <div className="nutrition-card">
      <div className="icon-wrapper">
        <img src={icon} alt={label} className="icon" />

        <div>
          <h3 className="value">
            {value}
            {unit}
          </h3>
          <p className="label">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default NutritionCard;
