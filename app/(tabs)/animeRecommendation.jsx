import { Text, View } from "react-native";
import AnimeRecommendationsScreen from "../screens/recommendations/recommendations";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AnimeRecommendation() {
    return (
        <SafeAreaView>
            <AnimeRecommendationsScreen/>
        </SafeAreaView>
    )
}