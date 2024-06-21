import { SafeAreaView } from "react-native-safe-area-context";
import AnimeRecommendationsScreen from "../screens/recommendations/recommendations";

export default function AnimeRecommendationIndependant() {
    return (
        <SafeAreaView>
            <AnimeRecommendationsScreen/>
        </SafeAreaView>
    )
}