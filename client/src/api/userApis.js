import axios from "axios";

export const getCities = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/city/list-all/`
    );
    return response.data;
  } catch (error) {
    throw error.response;
  }
};
export const getTitles = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/title/list-all/`
    );
    return response.data;
  } catch (error) {
    throw error.response;
  }
};
export const getUniversities = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/university/list-all/`
    );
    return response.data;
  } catch (error) {
    throw error.response;
  }
};
