import axios from "axios";

export const getCities = async () => {
  try {
    const response = await axios.get("http://localhost:8000/city/list-all/");
    return response.data;
  } catch (error) {
    throw error.response;
  }
};
export const getTitles = async () => {
  try {
    const response = await axios.get("http://localhost:8000/title/list-all/");
    return response.data;
  } catch (error) {
    throw error.response;
  }
};
export const getUniversities = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8000/university/list-all/"
    );
    return response.data;
  } catch (error) {
    throw error.response;
  }
};
