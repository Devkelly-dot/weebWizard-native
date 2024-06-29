import { createContext, useContext, useEffect, useState } from 'react';
import { authGet, authPost } from '../../../utils/authFetch';
import { useSelector } from 'react-redux';

const SubscriptionContext = createContext();

export function SubscriptionProvider ({ children }) {
    const token = useSelector((state)=>state.auth.token);
    const [subscriptionData, setSubscriptionData] = useState(null);
    
    useEffect(()=>{
        async function fetchAndSetSubscriptionData() {
            const subscriptionData = await fetchSubscriptionData();
            setSubscriptionData(subscriptionData);
        }

        if(token) {
            fetchAndSetSubscriptionData();
        }
    }, [token]);

    async function fetchSubscriptionData() {
        const data = await authGet('v1/subscription', token);
        
        if (data?.intentData) {
            setIntentData(data);
        } 
        return data;
    };

    async function toggleAutoRenewal(ar) {
        let autoRenew = true;
        if(!ar) {
            autoRenew = false;
        }

        const body = {autoRenew};
        if(token) {
            const res = await authPost('v1/subscription/auto-renew', token, body);
            const newAutoRenew = !res.updateData?.cancel_at_period_end;
            setSubscriptionData({...subscriptionData, isRenewing: newAutoRenew});
        }
    }

    return (
        <SubscriptionContext.Provider value={{ subscriptionData, toggleAutoRenewal }}>
            {children}
        </SubscriptionContext.Provider>
    );
};

export const useSubscription = () => useContext(SubscriptionContext);