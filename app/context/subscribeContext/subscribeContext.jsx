import { createContext, useContext, useEffect, useState } from 'react';
import { authGet, authPost } from '../../../utils/authFetch';
import { useSelector } from 'react-redux';

const SubscribeContext = createContext();

export function SubscribeProvider ({ children }) {
    const token = useSelector((state)=>state.auth.token);
    const [intentData, setIntentData] = useState(null);
    const [subscriptionPlans, setSubscriptionPlans] = useState(null);

    useEffect(()=>{
        async function fetchAndSetSubscriptionPlans() {
            const data = await fetchSubscriptionPlans();
            if(data?.subscriptionPlans) {
                setSubscriptionPlans(data.subscriptionPlans);
                console.log("plans: ", data.subscriptionPlans)
            }
        }

        if(token) {
            fetchAndSetSubscriptionPlans()
        }
    }, []);

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
        const res = await authGet('v1/subscription/plans', null);
        return res;
    }

    return (
        <SubscribeContext.Provider value={{ createPaymentIntent, intentData, subscriptionPlans }}>
            {children}
        </SubscribeContext.Provider>
    );
};

export const useSubscribe = () => useContext(SubscribeContext);