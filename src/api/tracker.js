import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

const instance = axios.create({
  baseURL: "https://997c21732961.ngrok.io",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
)

export default instance;