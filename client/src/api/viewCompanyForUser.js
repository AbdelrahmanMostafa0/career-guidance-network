import axios from "axios";

export const getCompany = async (id) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/company/view/${id}`,
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

export const getCompanyJobs = async (id) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/job/company/${id}/`,
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
