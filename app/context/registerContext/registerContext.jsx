import { useDispatch } from 'react-redux';
import { createContext, useContext } from 'react';
import { authPost } from '../../../utils/authFetch';
import { dispatchLogin } from '../../../utils/login';

const RegisterContext = createContext();

export function RegisterProvider ({ children }) {
    const dispatch = useDispatch(); 
    async function register(email, password) {

        const data = await authPost('v1/auth/register', null, {email, password});
        
        if (data?.token) {
            await dispatchLogin(dispatch, data);
        } 
        
        return data;
    };

    return (
        <RegisterContext.Provider value={{ register }}>
            {children}
        </RegisterContext.Provider>
    );
};

export const useRegister = () => useContext(RegisterContext);