import axios from "axios";

export const getCompany = async (id) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/job/company/${id}`
    );
  } catch (e) {}
};
