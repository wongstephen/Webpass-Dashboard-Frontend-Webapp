import axios from "axios";
const BASE_URL = process.env.REACT_APP_API;

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
