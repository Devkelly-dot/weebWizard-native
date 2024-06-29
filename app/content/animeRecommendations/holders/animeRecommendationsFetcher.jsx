import { AnimeRecommendationsProvider } from "../../../context/animeRecommendationsContext/animeRecommendationsContext";
import { SubscriptionProvider } from "../../../context/subscription/subscriptionContext";
import AnimeRecommendationsInteractor from "./animeRecommendationsInteractor";

export default function AnimeRecommendationsFetcher() {
    return (
        <SubscriptionProvider>
            <AnimeRecommendationsProvider>
                <AnimeRecommendationsInteractor/>
            </AnimeRecommendationsProvider>
        </SubscriptionProvider>
    )
}