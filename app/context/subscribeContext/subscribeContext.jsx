import { createContext, useContext, useState } from 'react';
import { authPost } from '../../../utils/authFetch';
import { useSelector } from 'react-redux';

const SubscribeContext = createContext();

export function SubscribeProvider ({ children }) {
    const token = useSelector((state)=>state.auth.token);
    const [intentData, setIntentData] = useState(null);
    const [subscriptionPlans, setSubscriptionPlans] = useState(null);

    async function createPaymentIntent(intentPlan) {
        if(token) {
            intentPlan = '667efe424df1086f7abfaba5';
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

    async function fetchSubscriptionPlans() {

    }

    return (
        <SubscribeContext.Provider value={{ createPaymentIntent, intentData, subscriptionPlans }}>
            {children}
        </SubscribeContext.Provider>
    );
};

export const useSubscribe = () => useContext(SubscribeContext);