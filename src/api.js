import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchSpells = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching spells:", error);
    return [];
  }
};
