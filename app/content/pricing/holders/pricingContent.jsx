import React, { useEffect, useState } from "react";
import { Alert, Text, View, StyleSheet, Image } from "react-native";
import { useSubscribe } from "../../../context/subscribeContext/subscribeContext";
import { useStripe } from "@stripe/stripe-react-native";
import StyledButton from "../../../components/button/styledButton";
import { useSelector } from "react-redux";
import { LinearGradient } from 'expo-linear-gradient';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useRouter } from "expo-router";
import PricingCard from "../../../components/pricingCard/pricingCard";

export default function PricingContent() {
    const router = useRouter();
    const token = useSelector((state) => state.auth.token);
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const { createPaymentIntent, intentData, subscriptionPlans } = useSubscribe();
    const [error, setError] = useState(null);

    useEffect(() => {
        async function initializePaymentIntent() {
            const data = await createPaymentIntent();
            if (data?.error) {
                setError(data.error);
            }
        }

        if (token) {
            initializePaymentIntent();
        }
    }, [token]);

    useEffect(() => {
        if (intentData) {
            console.log("INITIALIZING");
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

        if (error) {
            console.log("ERROR: ", error);
            setError(error.message);
        }
    };

    async function openPaymentSheet() {
        const data = await presentPaymentSheet();

        if (data?.error) {
            const error = data.error;
            Alert.alert(`Error code: ${error.code}`, error.message);
        } else {
            router.replace('/(tabs)/account')
        }
    }

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#e5e4ff', dark: '#e5e4ff' }}
            headerImage={
                <Image
                    source={require('@/assets/images/hero.png')}
                    style={styles.reactLogo}
                />
            }
        >
            <View style={styles.container}>
                <Text style={styles.header}>Pricing</Text>
                {
                    !intentData && !error ? 
                    <Text>Loading...</Text> :
                    <View style={styles.plansContainer}>
                        {subscriptionPlans.map(plan => (
                            <PricingCard
                                plan={plan}
                                onSubscribePress={()=>plan.title === "premium"&&openPaymentSheet()}
                            />
                        ))}
                    </View>
                }
            </View>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    plansContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    reactLogo: {
      height: '100%',
      width: '100%',
      bottom: 0,
      left: 0,
      position: 'absolute',
    }
});