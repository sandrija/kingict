import React, { useLayoutEffect, useState, useCallback, useMemo, useContext } from 'react';
import AuthApi from '../../ApiClient/AuthApi';
import CartApi from '../../ApiClient/CartApi';

import {
    getTokenFromLocalStorage,
    getUseFromLocalStorage,
    saveTokenToLocalStorage,
    saveRefreshTokenToLocalStorage,
    saveUserToLocalStorage
} from '../../utils/authStorageUtils';
import MaterialLoader from '../Layout/MaterialLoader';

const AppContext = React.createContext(null);

export function AppProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [cartState, setCartState] = useState(null);
    const [isAppLoading, setIsAppLoading] = useState(true);

    useLayoutEffect(() => {
        (async () => {
            try {
                const token = getTokenFromLocalStorage();
                if (token) {
                    const loggedInUser = (await AuthApi.getMe()).data;
                    console.log('useLayoutEffect => loggedInUser: ', loggedInUser);
                    const myCart = (await CartApi.getMyCart(loggedInUser.id)).data;
                    console.log('myCart: ', myCart);
                    setCartState(myCart);
                    setCurrentUser(loggedInUser);
                }
            } finally {
                setIsAppLoading(false);
            }
        })();
    }, []);

    const logIn = useCallback(
        async (authPayload) => {
            const loggedInUser = (await AuthApi.postLogin(authPayload)).data;
            if (loggedInUser) {
                saveTokenToLocalStorage(loggedInUser.accessToken);
                saveRefreshTokenToLocalStorage(loggedInUser.refreshToken);
                setCurrentUser(loggedInUser);
            }
            console.log('loggedInUser: ', loggedInUser);
        },
        []
    );

    const appContext = useMemo(() => {
        return { currentUser, logIn };
    }, [currentUser, cartState, logIn]);

    return (
        <AppContext.Provider value={appContext}>
            {
                isAppLoading && (<MaterialLoader />)
            }
            {
                !isAppLoading && children
            }
        </AppContext.Provider>
    );
}

export function useApp() {
    const app = useContext(AppContext);
    if (!app) {
        throw new Error(
            `No App Services App found. Make sure to call useApp() inside of a <AppProvider />.`
        );
    }
    return app;
}
