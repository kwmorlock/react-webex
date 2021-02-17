import axios from "axios";

const apiUrl = `${process.env.REACT_APP_API_URI}`;

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: apiUrl,
    headers: {
      Authorization: token,
    },
  });
};
