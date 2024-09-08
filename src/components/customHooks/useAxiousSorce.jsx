import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://hifzur-rahman-server-site.vercel.app/",
  // baseURL: "http://localhost:5000/",
});

export default function useAxiosSource() {
  return { axiosSource: axiosInstance };
}
