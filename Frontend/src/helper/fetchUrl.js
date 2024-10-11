import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL; 

export const Axios = async (method, url, data = {}) => {
  try {
    const axiosParams = {
      method,
      url,
      headers: {
        accept: "*/*",
      },
      data,
    };
    return await axios.request(axiosParams);
  } catch (error) {
    return error;
  }
};

export const axiosWithToastify = async (method, url, data = {}) => {
  try {
    const axiosParams = {
      method,
      url,
      headers: {
        accept: "*/*",
      },
      data,
    };
    const response = await axios.request(axiosParams);

    toast.success(response.data.message, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeButton: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return {
      path: response.data.path,
      statusCode: response.status,
      token: response.data.token,
    };
  } catch (error) {
    toast.warn(error.response.data.message, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeButton: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    return {
      path: error.response.data.path,
      statusCode: error.response.status,
    };
  }
};
