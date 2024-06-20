import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';

const AccountContext = createContext();

export function AccountProvider ({ children }) {
    const dispatch = useDispatch(); 
    const [account, setAccount] = useState(null);

    useEffect(() => {
        async function getAccount() {
            const token = await AsyncStorage.getItem('token');
            const _id = await AsyncStorage.getItem('_id');
            const email = await AsyncStorage.getItem('email');
            const subscription = await AsyncStorage.getItem('subscription');

            setAccount({token, _id, email, subscription});
        };

        getAccount();
    }, [dispatch]);

    return (
        <AccountContext.Provider value={{ account }}>
            {children}
        </AccountContext.Provider>
    );
};

export const useAccount = () => useContext(AccountContext);