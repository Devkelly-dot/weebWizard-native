import React, { useEffect, useState } from "react";
import { Alert, Text, View, StyleSheet, Image } from "react-native";
import { useSubscribe } from "../../../context/subscribeContext/subscribeContext";
import { useStripe } from "@stripe/stripe-react-native";
import StyledButton from "../../../components/button/styledButton";
import { useSelector } from "react-redux";
import { LinearGradient } from 'expo-linear-gradient';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useRouter } from "expo-router";

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


    const PlanDetails = ({ plan }) => (
        <>
            <Text style={styles.planTitle}>{plan.displayName}</Text>
            <Text style={styles.planDescription}>{plan.includes.length}</Text>
            <Text style={styles.planDetails}>Max Prompt Size: {plan.includes.max_prompt_size}</Text>
            <Text style={styles.planDetails}>Max Tokens: {plan.includes.max_tokens}</Text>
            <Text style={styles.planDetails}>Suggestion Requests: {plan.includes.suggestion_requests}</Text>
            <Text style={styles.planDetails}>Suggestions Returned: {plan.includes.suggestions_returned}</Text>
            {plan.price_monthly && (
                <StyledButton
                    text={"Purchase Plan"}
                    onPress={openPaymentSheet}
                    style={styles.button}
                />
            )}
        </>
    );

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
                        <View key={plan._id} style={[
                            styles.planCard, 
                            plan.title === "premium" && styles.premiumCard
                        ]}>
                            {plan.title === "premium" ? (
                                <LinearGradient
                                    colors={['#ff8a00', '#e52e71']}
                                    style={styles.gradientBorder}
                                >
                                    <View style={styles.planCardInner}>
                                        <PlanDetails plan={plan} />
                                    </View>
                                </LinearGradient>
                            ) : (
                                <PlanDetails plan={plan} />
                            )}
                        </View>
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
    planCard: {
        width: '100%',
        padding: 15,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: '#f8f8f8',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    premiumCard: {
        padding: 0,
        borderRadius: 10,
    },
    gradientBorder: {
        borderRadius: 10,
        padding: 2,
    },
    planCardInner: {
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 15,
    },
    planTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    planDescription: {
        fontSize: 14,
        marginBottom: 10,
    },
    planDetails: {
        fontSize: 12,
        marginBottom: 5,
    },
    button: {
        marginTop: 10,
    },
    reactLogo: {
      height: '100%',
      width: '100%',
      bottom: 0,
      left: 0,
      position: 'absolute',
    }
});