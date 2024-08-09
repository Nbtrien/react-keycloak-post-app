import axios from "axios";
import apiConfig from "./apiConfig";
import { useKeycloak } from "@react-keycloak/web";

const useAxios = () => {
  const instance = axios.create({
    baseURL: apiConfig.baseUrl,
    timeout: 10000, // Set timeout for requests
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const { keycloak } = useKeycloak();

  interface ApiRequestParams {
    url: string;
    method?: "GET" | "POST" | "PUT" | "DELETE";
    data?: any;
    requiresAuth?: boolean;
  }

  const apiRequest = async ({
    url,
    method = "GET",
    data,
    requiresAuth = false,
  }: ApiRequestParams) => {
    try {
      const token = keycloak?.token;

      const config: any = {
        method,
        url,
        data,
      };

      if (requiresAuth && token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }

      const response = await instance(config);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return apiRequest;
};

export default useAxios;
