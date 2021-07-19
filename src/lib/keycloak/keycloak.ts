import { createContext } from 'react';

type Keycloak = {
    getTokenSilently: () => void;
    handleRedirectCallback: () => void;
    isAuthenticated: boolean;
    loading: boolean;
    logout: () => void;
    user: { [key: string]: any; };
};

const initialKeycloak = {
    getTokenSilently: () => { console.log('getTokenSilently') },
    handleRedirectCallback: () => { console.log('handleRedirectCallback') },
    isAuthenticated: false,
    loading: true,
    logout: () => { console.log('logout') },
    user: {}
};

export const KeycloakContext = createContext<Keycloak>(initialKeycloak);
