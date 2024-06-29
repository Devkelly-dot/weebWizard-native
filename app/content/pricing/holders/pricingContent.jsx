import { Alert, Text, View } from "react-native";
import { useSubscribe } from "../../../context/subscribeContext/subscribeContext";
import { useEffect, useState } from "react";
import { useStripe } from "@stripe/stripe-react-native";

export default function PricingContent() {
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const {createPaymentIntent, intentData} = useSubscribe();
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function initializePaymentIntent() {
            const data = await createPaymentIntent();
            if(data?.error) {
                console.log(data.error);
                setError(data.error);
            }
        }

        initializePaymentIntent();
    }, []);

    useEffect(() => {
        if(intentData) {
            initializePaymentSheet();
        }
    }, [intentData]);

    async function initializePaymentSheet() {
        const { error } = await initPaymentSheet({
            merchantDisplayName: "Weeb Wizard",
            customerId: intentData?.stripe_id,
            paymentIntentClientSecret: intentData?.intentData?.stripeSubscription?.latest_invoice?.payment_intent?.client_secret,
            allowsDelayedPaymentMethods: true,
            defaultBillingDetails: {
                email: intentData?.intentData?.stripeSubscription?.latest_invoice?.payment_intent?.customer_email,
            }
        });
        if (!error) {
            openPaymentSheet(false);
        }
    };

    async function openPaymentSheet() {
        const data = await presentPaymentSheet();

        if (data?.error) {
            const error = data.error;
            Alert.alert(`Error code: ${error.code}`, error.message);
        }
    }
    
    return (
        <View>
            <Text>Pricing</Text>
            {
                !intentData && !error? 
                <Text>Loading...</Text>
                :
                <View>

                </View>
            }
        </View>
    )
}