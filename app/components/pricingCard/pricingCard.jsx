import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import PlanDetails from "./components/planDetails";

export default function PricingCard({plan, onSubscribePress, canPurchase}) {
    return (
        <View style={[
            styles.planCard, 
            plan.title === "premium" && styles.premiumCard
        ]}>
            {plan.title === "premium" ? (
                <LinearGradient
                    colors={['#ff8a00', '#e52e71']}
                    style={styles.gradientBorder}
                >
                    <View style={styles.planCardInner}>
                        <PlanDetails plan={plan} onSubscribePress={onSubscribePress} canPurchase={canPurchase}/>
                    </View>
                </LinearGradient>
            ) : (
                <PlanDetails plan={plan} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
});