import axios from "axios";

export default () => {
  const token = localStorage.getItem("token") || "";

  return axios.create({
    baseURL: "http://localhost:80/",
    headers: {
      Authorization: token,
    },
  });
};