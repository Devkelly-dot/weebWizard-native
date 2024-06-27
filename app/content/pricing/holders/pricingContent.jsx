import { Alert, Text, View } from "react-native";
import { useSubscribe } from "../../../context/subscribeContext/subscribeContext";
import { useEffect } from "react";
import { useStripe } from "@stripe/stripe-react-native";

export default function PricingContent() {
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const {createPaymentIntent, intentData} = useSubscribe();

    useEffect(()=>{
        createPaymentIntent();
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
                !intentData ? 
                <Text>Loading...</Text>
                :
                <View>

                </View>
            }
        </View>
    )
}