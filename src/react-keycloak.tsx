import React, { useState, useEffect, useContext } from 'react';
import { KeycloakContext } from './lib/keycloak/keycloak';
import api from './lib/keycloak/api';
/* import * as Keycloak from 'keycloak-js'; */
import * as Keycloak from 'keycloak-js';

const DEFAULT_REDIRECT_CALLBACK = () =>
    window.history.replaceState({}, document.title, window.location.pathname);

export const useAuth0 = () => useContext(KeycloakContext);
export let token: any = "";

let keycloak: any;

type Props = {
    children: any;
    initOptions: any;
    onRedirectCallback?: (appState: any) => void;
};

export const KeycloakProvider: React.FC<Props> = ({
    children,
    initOptions,
    onRedirectCallback = DEFAULT_REDIRECT_CALLBACK
}) => {
    const [keycloakClient, setKeycloak] = useState<any>();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<{ [key: string]: any; }>({});

    useEffect(() => {
        const initKeycloak = async () => {
            let keycloak = Keycloak.default(initOptions);
            const test = await keycloak.init({ onLoad: initOptions.onLoad }).then(async (auth: any) => {
                setIsAuthenticated(auth);
                api.setToken(keycloak.token!);
                setKeycloak(keycloak);
                token = keycloak.token;
                keycloak.loadUserProfile().then((userInfo: any) => {
                    const keycloakUser = userInfo;
                    setUser(keycloakUser);
                }).catch((err: any) => {
                    console.log("error "+err);
                });

                if (
                    window.location.hash.includes('code=') &&
                    window.location.hash.includes('state=')
                ) {
                    const { appState } = await keycloakClient.handleRedirectCallback();
                    onRedirectCallback(appState);
                };

                if (isAuthenticated) {
                    keycloak.loadUserProfile().then((userInfo: any) => {
                        const keycloakUser = userInfo;
                        setUser(keycloakUser);
                    }).catch((err: any) => {
                        console.log("error "+err);
                    });
                };
            }).catch((err: any) => {
                console.log('Failed with '+err);
            })

            console.log(test);
            console.log("SET LOADING FALSE");
            setLoading(false);
        };
        initKeycloak();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleRedirectCallback = async () => {
        setLoading(true);
        await keycloakClient.handleRedirectCallback();
        const keycloakUser = await keycloakClient.loadUserInfo();
        keycloak.updateToken(70).success((refreshed: boolean) => {
            if (refreshed) {
                console.log('Token refreshed ' + refreshed);
            } else {
                console.log('Token not refreshed, valid for '+ Math.round(keycloakClient.tokenParsed.exp + keycloakClient.timeSkew - new Date().getTime() / 1000) + ' seconds');
            }
        }).error(() => {
            console.error('Failed to refresh token');
        });
        api.setToken(keycloakClient.token);
        setIsAuthenticated(true);
        setLoading(false);
        setUser(keycloakUser);
    };

    return (
        <KeycloakContext.Provider
            value={{
                getTokenSilently: (...p) => keycloakClient.getTokenSilently(...p),
                handleRedirectCallback,
                isAuthenticated,
                loading,
                logout: (...p) => keycloakClient.logout(...p),
                user
            }}
        >
            {children}
        </KeycloakContext.Provider>
    );
};
