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

export const getHomeFeed = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/job/search`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const getSearch = async ({ title = "", location = "", type = "" }) => {
  const token = localStorage.getItem("token");
  // console.log(query);
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/job/search?title=${title}&location=${location}&type=${type}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const getCompanySearch = async ({
  title = "",
  city = "",
  gender = "",
  min_age = "",
  max_age = "",
}) => {
  const token = localStorage.getItem("token");
  // console.log(query);
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/search?title=${title}&city=${city}&gender=${gender}&min_age=${min_age}&max_age=${max_age}`,
      {
        headers: {
          auth: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getRoadmapByField = async (id) => {
  const token = localStorage.getItem("token");
  // console.log(query);
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/field/${id}/roadmaps/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
