import { StripeProvider } from "@stripe/stripe-react-native";
import { SubscribeProvider } from "../../../context/subscribeContext/subscribeContext";
import PricingInteractor from "./pricingInteractor";
import { config } from "../../../../config";

export default function PricingFetcher() {
    return (
        <StripeProvider
            publishableKey={config.stripe_publishable_key}
        > 
            <SubscribeProvider>
                <PricingInteractor/>
            </SubscribeProvider>
        </StripeProvider>
    )
}