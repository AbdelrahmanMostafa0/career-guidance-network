import axios from "axios";

export const getJobForCompany = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/job/view/${id}/`,
      {
        headers: {
          auth: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data; // Throw the error response data for better handling
  }
};
export const getApplicants = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/application/job/${id}/view/`,
      {
        headers: {
          auth: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data; // Throw the error response data for better handling
  }
};
export const gatjobsHome = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/company/jobs/`,
      {
        headers: {
          auth: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json", // Specify content type as JSON
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getUser = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/show/${id}/`,
      {
        headers: {
          auth: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data; // Throw the error response data for better handling
  }
};

export const getCompanyhome = async () => {
  const token = localStorage.getItem("token");
  // console.log(query);
  try {
    const response = await axios.get(`http://127.0.0.1:8000/user/search`, {
      headers: {
        auth: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
