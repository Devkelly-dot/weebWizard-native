import { createContext, useContext, useState } from 'react';
import { authPost } from '../../../utils/authFetch';
import { useSelector } from 'react-redux';

const SubscribeContext = createContext();

export function SubscribeProvider ({ children }) {
    const token = useSelector((state)=>state.auth.token);
    const [intentData, setIntentData] = useState(null);

    async function createPaymentIntent(intentPlan) {
        if(token) {
            intentPlan = '664ea53e1ed349e33ed72806';
            const data = await authPost('v1/stripe/payment-intent', token, {intentPlan});
            
            if (data?.intentData) {
                setIntentData(data);
            } 
            return data;
        } else {
            return {
                error: {
                    code: 401,
                    message: 'Please logout and log back in and try again'
                }
            }
        }
    };

    return (
        <SubscribeContext.Provider value={{ createPaymentIntent, intentData }}>
            {children}
        </SubscribeContext.Provider>
    );
};

export const useSubscribe = () => useContext(SubscribeContext);