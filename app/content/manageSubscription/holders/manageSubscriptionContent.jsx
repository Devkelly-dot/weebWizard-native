import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useSubscription } from '../../../context/subscription/subscriptionContext';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useRouter } from 'expo-router';

const SubscriptionManagement = () => {
    const router = useRouter();
    const { subscriptionData, toggleAutoRenewal } = useSubscription();

    if (!subscriptionData) {
        return <Text style={styles.loadingText}>Loading...</Text>; // or any other loading indicator
    }

    const { subscriptionPlan, currentPeriodEnd, isRenewing, suggestion_requests } = subscriptionData;
    const endDate = new Date(currentPeriodEnd * 1000).toLocaleDateString();

    const handleRenewalToggle = () => {
        toggleAutoRenewal(!isRenewing)
    };

    function routeToPricing() {
        router.push('/pricing/pricing');
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
                <View style={styles.card}>
                    <Text style={styles.title}>{subscriptionPlan.displayName} Plan</Text>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>{`${isRenewing?"Renews":"Ends"} on ${endDate}`}</Text>
                        <Text style={styles.infoText}>{`Anime Suggestions: ${suggestion_requests}/${subscriptionPlan.includes.suggestion_requests}`}</Text>
                    </View>
                    {
                        subscriptionPlan.title!=='free' ?
                        <TouchableOpacity
                            style={isRenewing ? styles.buttonOff : styles.buttonOn}
                            onPress={handleRenewalToggle}
                        >
                            <Text style={styles.buttonText}>{isRenewing ? "Turn Auto Renew Off" : "Turn Auto Renew On"}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            style={styles.buttonOn}
                            onPress={routeToPricing}
                        >
                            <Text style={styles.buttonText}>Upgrade</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </ParallaxScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },  
    card: {
        padding: 20,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        justifyContent: 'center',
        width: '90%'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    infoContainer: {
        marginBottom: 20,
    },
    infoText: {
        fontSize: 16,
        color: '#555',
        marginBottom: 10,
    },
    renewingYes: {
        color: 'green',
        fontWeight: 'bold',
    },
    renewingNo: {
        color: 'red',
        fontWeight: 'bold',
    },
    buttonOn: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOff: {
        backgroundColor: '#f44336',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loadingText: {
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
        marginTop: 20,
    },
    reactLogo: {
      height: '100%',
      width: '100%',
      bottom: 0,
      left: 0,
      position: 'absolute',
    }
});

export default SubscriptionManagement;