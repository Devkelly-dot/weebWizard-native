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
    const [purchasedPressed, setPurchasedPressed] = useState(false);

    useEffect(() => {
        if (intentData) {
            initializePaymentSheet();
        }
    }, [intentData]);

    
    async function initializePaymentIntent(plan) {

        const data = await createPaymentIntent(plan);
        if (data?.error) {
            setError(data.error);
            setPurchasedPressed(false);
        }
    }

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
            setError(error.message);
            setPurchasedPressed(false);
        } else {
            openPaymentSheet();
        }
    };

    async function onPurchaseClick(plan) {
        setPurchasedPressed(true);
        const intentData = await initializePaymentIntent(plan);
    }

    async function openPaymentSheet() {
        const data = await presentPaymentSheet();

        if (data?.error) {
            const error = data.error;
            Alert.alert(`Error code: ${error.code}`, error.message);
            setPurchasedPressed(false);
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
                    !subscriptionPlans ? 
                    <Text>Loading...</Text> :
                    <View style={styles.plansContainer}>
                        {subscriptionPlans.map(plan => (
                            <PricingCard
                                plan={plan}
                                onSubscribePress={()=>plan?.title === "premium"&&!purchasedPressed&&onPurchaseClick(plan)}
                                canPurchase={!purchasedPressed}
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