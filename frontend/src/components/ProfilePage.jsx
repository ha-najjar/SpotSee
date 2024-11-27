import React, { useEffect, useState } from "react";
import { getUserData } from "../services/api";
import NutritionOverview from "./NutritionOverview";

import "../styles/ProfilePage.css";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (window.innerWidth < 1024 || window.innerHeight < 780) {
      alert(
        "La page est optimisée pour une résolution d'au moins 1024x780 pixels."
      );
    }
    const fetchUserData = async () => {
      try {
        const data = await getUserData("12");
        console.log("Données utilisateur récupérées :", data);
        setUserData(data.data); // Stocke uniquement la partie utile
      } catch (err) {
        setError("Impossible de récupérer les données utilisateur.");
        console.error(err);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="profile-page-container">
      {error ? (
        <p className="error-message">{error}</p>
      ) : userData ? (
        <div className="profile-items">
          <div className="user">
            <h1>
              Bonjour{" "}
              <span className="user-Name">
                {" "}
                {userData?.userInfos?.firstName || "Utilisateur"}
              </span>
            </h1>
            <p> Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <div>
            <NutritionOverview userId={12} />
          </div>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default ProfilePage;
