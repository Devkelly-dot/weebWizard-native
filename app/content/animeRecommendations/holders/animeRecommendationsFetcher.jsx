import { AnimeRecommendationsProvider } from "../../../context/animeRecommendationsContext/animeRecommendationsContext";
import AnimeRecommendationsInteractor from "./animeRecommendationsInteractor";

export default function AnimeRecommendationsFetcher() {
    return (
        <AnimeRecommendationsProvider>
            <AnimeRecommendationsInteractor/>
        </AnimeRecommendationsProvider>
    )
}