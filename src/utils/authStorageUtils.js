import { config } from '../constants/config';
import { authStorageKeys } from '../constants/authStorageKeys';
const storage = window.localStorage;

export const saveTokenToLocalStorage = (accessToken) => {
    storage.setItem(authStorageKeys.accessToken, accessToken);
};

export const saveRefreshTokenToLocalStorage = (refreshToken) => {
    storage.setItem(authStorageKeys.refreshToken, refreshToken);
};

export const getTokenFromLocalStorage = () => {
    const token = storage.getItem(authStorageKeys.accessToken);
    return token || null;
};

export const getRefreshTokenFromLocalStorage = () => {
    const refreshToken = storage.getItem(authStorageKeys.refreshToken);
    return refreshToken || null;
};

export const clearLocalStorage = () => {
    storage.clear();
}

export function getAuthorizationHttpHeader() {
    const token = getTokenFromLocalStorage()
    if (!token)
        return null;

    return {
        Authorization: `Bearer ${token}`,
    };
}

export function getRequestHeaders() {
    return {
        ...config.defaultHeaders,
        ...getAuthorizationHttpHeader(),
    };
}
