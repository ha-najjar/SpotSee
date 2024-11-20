import axios from "axios";

export const getUserData = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:3000/user/${userId}`);
    // Retourne uniquement les données pertinentes
    return response.data;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données utilisateur :",
      error
    );
    throw error;
  }
};
