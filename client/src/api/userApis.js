import axios from "axios";

// export const userLogin = async (userData) => {
//   try {
//     const response = await axios.post(
//       "http://localhost:8000/account/login/",
//       userData, // Assuming userData is an object containing username and password properties
//       {
//         headers: {
//           "Content-Type": "application/json", // Specify content type as JSON
//         },
//       }
//     );
//     console.log(response);
//   } catch (error) {
//     return error.response;
//   }
// };

// export const userRgister = async (userData) => {
//   try {
//     const response = await axios.post(
//       "http://localhost:8000/account/register/",
//       userData, // Assuming userData is an object containing username and password properties
//       {
//         headers: {
//           "Content-Type": "application/json", // Specify content type as JSON
//         },
//       }
//     );
//     console.log(response);
//   } catch (error) {
//     return error.response;
//   }
// };

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
