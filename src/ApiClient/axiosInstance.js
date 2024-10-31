import Axios from 'axios';
import URI from 'urijs';
import { config } from '../constants/config';

import {
    clearLocalStorage,
    getRefreshTokenFromLocalStorage,
    getRequestHeaders,
    saveTokenToLocalStorage,
    saveRefreshTokenToLocalStorage,
} from '../utils/authStorageUtils';

const endpointAuthRefresh = URI(config.server).path(config.endpoints.refreshToken).valueOf();
const axiosInstance = Axios.create();


axiosInstance.interceptors.request.use(
    // async (config) => getRequestHeaders(config),
    async (config) => ({...config, headers: getRequestHeaders()}),
    (error) => {
        Promise.reject(error);
    }
);

const failedRequestsQueue = [];
let isRefreshTokenNeeded = false;
//
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response && error.response.status === 401) {
            if (!isRefreshTokenNeeded) {
                isRefreshTokenNeeded = true;
                try {
                    const savedRefreshToken = getRefreshTokenFromLocalStorage();
                    if (savedRefreshToken) {
                        try {
                            const refreshAuthResponse = (await Axios
                                .post(
                                    endpointAuthRefresh,
                                    {
                                        refreshToken: savedRefreshToken,
                                        expiresInMins: config.tokenExpiresInMins,
                                    },
                                    { headers: config.defaultHeaders },
                                )).data;
                            saveTokenToLocalStorage(refreshAuthResponse.accessToken);
                            saveRefreshTokenToLocalStorage(refreshAuthResponse.refreshToken);
                            return axiosInstance(originalRequest);
                        } catch (errorRefreshToken) {
                            console.log(errorRefreshToken);
                            clearLocalStorage();
                        }
                    } else {
                        clearLocalStorage();
                        return Promise.reject(error);
                    }
                } catch (refreshError) {
                    failedRequestsQueue.length = 0;
                    clearLocalStorage();
                } finally {
                    isRefreshTokenNeeded = false;
                }
            }
            return new Promise((resolve, reject) => {
                failedRequestsQueue.push({ config: originalRequest, resolve, reject });
         });
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
