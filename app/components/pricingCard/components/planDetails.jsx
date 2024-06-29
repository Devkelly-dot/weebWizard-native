import { StyleSheet, Text, View } from "react-native";
import StyledButton from "../../button/styledButton";
import PlanFeature from "./planFeature";

export default function PlanDetails({plan, onSubscribePress}) {
    function formatPrice(price) {
        const dollars = price / 100;
        return `$${dollars.toFixed(2)}`;
    }

    console.log(plan);

    const features = [
        {
            name: `${plan.title==='free'?'Short and minimalist':'Long and descriptive'} AI`,
        },
        {
            name: `${plan.includes.max_prompt_size} character prompt size`,
        },
        {
            name: `${plan.includes.max_tokens} token limit for the AI's response`,
        },
        {
            name: `${plan.includes.suggestion_requests} daily AI suggestions`,
        },
        {
            name: `Up to ${plan.includes.suggestions_returned} recommendations returned per suggestion`
        },
        {
            name: 'Browse Anime'
        },
        {
            name: 'View Anime Streaming Availability'
        }
    ]
    return (
        <View>
            <View style={styles.cardTitle}>
                <Text style={styles.planTitle}>
                    {plan.displayName}
                </Text>
                {
                    plan.display_price_monthly && 
                    <Text style={styles.planTitle}>
                        {`${formatPrice(plan.display_price_monthly)}`}
                        <Text style={styles.smallerText}>/month</Text>
                    </Text>
                }
            </View>
            <View>
                {
                    features?.map((f)=>{
                        return (
                            <PlanFeature
                                key={f.name}
                                feature={f}
                            />
                        )
                    })
                }
            </View>
            {plan.price_monthly && (
                <StyledButton
                    text={"Purchase Plan"}
                    onPress={onSubscribePress}
                    sx={styles.button}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    planTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    button: {
        marginTop: 10,
    },
    cardTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    smallerText: {
        fontSize: 12,
    }
});