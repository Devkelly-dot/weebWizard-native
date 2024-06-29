import { SubscriptionProvider } from "../../../context/subscription/subscriptionContext";
import ManageSubscriptionContent from "./manageSubscriptionContent";

export default function ManageSubscriptionFetcher() {
    return (
        <SubscriptionProvider>
            <ManageSubscriptionContent/>
        </SubscriptionProvider>
    )
}