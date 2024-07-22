import axios from "axios";

export const getAllNewsApiCall = async (skip, limit, category) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/news/get/all?skip=${skip}&limit=${limit}&cat=${category}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response;
    } else {
      return { success: false, message: "Server is Down" };
    }
  }
};
