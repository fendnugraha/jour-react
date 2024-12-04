import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // Required for Sanctum
});

// CSRF Token Initialization
export const initializeCsrf = async () => {
  await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/sanctum/csrf-cookie`);
};

// Interceptors for Errors (optional)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login"; // Redirect on unauthorized
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
