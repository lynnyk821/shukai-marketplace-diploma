import {BACKEND_URL} from "../../globals-env.ts";
import axios from "axios";
import {TokenManager} from "../helpers/tokenManager.ts";

export const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
});

axiosInstance.interceptors.response.use(response => response, async error => {
    const originalRequest = error.config;

    // Перевірка на помилку 401 (Unauthorized)
    if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
            const { data } = await axios.post(`${BACKEND_URL}/user-service/api/auth/refresh`, {
                headers: {
                    Authorization: `Bearer ${TokenManager.getRefreshToken()}`
                }
            });

            TokenManager.setAccessToken(data.accessToken);

            originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;

            return axiosInstance(originalRequest);
        } catch (refreshError) {
            TokenManager.clearTokens();

            sessionStorage.clear();

            window.location.href = '/sign-in';

            console.log(refreshError);

            return Promise.reject(refreshError);
        }
    }

    return Promise.reject(error);
});