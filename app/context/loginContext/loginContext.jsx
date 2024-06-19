import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect } from 'react';
import { authPost } from '../../../utils/authFetch';
import { dispatchLogin, dispatchLogout } from '../../../utils/login';

const LoginContext = createContext();

export function LoginProvider ({ children }) {
    const dispatch = useDispatch(); 

    useEffect(() => {
        async function checkToken() {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                await dispatchLogin(dispatch, {token});
            } else {
                await dispatchLogout(dispatch);
            }
        };

        checkToken();
    }, [dispatch]);

    async function login(email, password) {

        const data = await authPost('v1/auth/login', null, {email, password});
        if (data?.token) {
            await dispatchLogin(dispatch, data);
        } 
        
        return data;
    };

    async function logout() {
        await dispatchLogout(dispatch);
    };

    return (
        <LoginContext.Provider value={{ login, logout }}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLogin = () => useContext(LoginContext);