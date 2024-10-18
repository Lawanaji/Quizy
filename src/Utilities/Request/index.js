import axios from "axios";

const getBearerToken = () => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    return `Bearer ${token}`;
  } else {
    return null;
  }
};

const axiosInstance = axios.create({
  baseURL: "https://terra-quiz-app.onrender.com/api/v1",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const bearerToken = getBearerToken();
    if (bearerToken) {
      config.headers["Authorization"] = bearerToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error, "from request");
    if (error.message === "Network Error") {
      return Promise.reject("Network Error. Please try again.");
    }
    let message = error.response.data.error
      ? error.response.data.error
      : error.response.data.message;
    if (error.response.data.error === "Unauthorized") {
      localStorage.removeItem("accessToken");
    }
    if (message === "Unauthorized - Invalid token") {
      localStorage.removeItem("accessToken");
    }

    return Promise.reject(message);
  }
);

export default axiosInstance;
