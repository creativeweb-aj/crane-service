import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {Logout} from '../utils/Logout';
import { API } from "../constant/api";

const BACKEND_URL = API.PORT;

const useRequest = () => {
  const language = 'en'
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const navigate = useNavigate();

  const startFetching = () => {
    setResponse(null);
    setError(null);
  };

  const clear = () => {
    setResponse(null);
    setError(null);
  };

  const fetchedData = () => {
    setError(null);
  };

  const requestData = (method, url, data) => {
    let token = localStorage.getItem("token")
    let config;

    if (token) {
      config = {
        method,
        url: `${BACKEND_URL}/${url}`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Accept-Language": language,
        },
        data,
      };
    } else {
      config = {
        method,
        url: `${BACKEND_URL}/${url}`,
        headers: {
          "Accept-Language": language,
        },
        data,
      };
    }

    startFetching();

    axios(config)
      .then((res) => {
        fetchedData();
        setResponse(res.data);
      })
      .catch((err) => {
        fetchedData();
        if (err.response) {
          if (err.response.status === 401) {
            Logout()
          } else if (err.response.status === 404) {
            navigate("/404");
          } else {
            toast.error(err.response.data.message);
          }
        } else if (err.request) {
          // dispatch(logout());
        } else {
          // dispatch(logout());
        }
      });
  };

  return {
    error,
    request: requestData,
    clear,
    response,
    setError,
  };
};

export default useRequest;
