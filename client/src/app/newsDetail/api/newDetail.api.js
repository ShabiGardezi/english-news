import axios from "axios";

export const getNewsDetailApiCall = async (newsId) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/news/get/${newsId}`);
    console.log(response);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response;
    } else {
      return { success: false, message: "Server is Down" };
    }
  }
};
