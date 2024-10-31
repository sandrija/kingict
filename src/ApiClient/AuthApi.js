import URI from 'urijs';
import axiosInstance from './axiosInstance';
import { config } from '../constants/config';

const endpointAuth = URI(config.server).path(config.endpoints.auth).valueOf();
const endpointMe = URI(config.server).path(config.endpoints.me).valueOf();

const AuthApi = {
    postLogin: (authPayload) => axiosInstance
        .post(endpointAuth, { ...authPayload, expiresInMins: config.tokenExpiresInMins }),

    getMe: () => axiosInstance
        .get(endpointMe),
};

export default AuthApi;
