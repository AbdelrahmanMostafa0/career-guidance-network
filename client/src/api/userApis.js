import axios from "axios";

export const userLogin = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/account/login/",
      userData, // Assuming userData is an object containing username and password properties
      {
        headers: {
          "Content-Type": "application/json", // Specify content type as JSON
        },
      }
    );
    console.log(response);
  } catch (error) {
    return error.response;
  }
};

export const userRgister = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/account/register/",
      userData, // Assuming userData is an object containing username and password properties
      {
        headers: {
          "Content-Type": "application/json", // Specify content type as JSON
        },
      }
    );
    console.log(response);
  } catch (error) {
    return error.response;
  }
};
