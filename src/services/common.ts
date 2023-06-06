import axios from "axios";
import Constants from "expo-constants";

const axiosInstance = axios.create({
  baseURL: `${Constants.manifest?.extra?.BASE_URL}/`,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

export default axiosInstance;
