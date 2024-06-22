import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import RecommendationForm from "../components/recommendationForm";
import { useAnimeRecommendations } from "../../../context/animeRecommendationsContext/animeRecommendationsContext";
import RecommendationResults from "../recommendationResults/recommendationResults";

export default function AnimeRecommendationsContent() {
    const {animeRecommendationsLoading, animeRecommendations} = useAnimeRecommendations();
    return (
        <View>
            {
                animeRecommendationsLoading ?
                <View style={styles.loadingContainer}>
                    <Text>Getting Recommendations</Text>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
                :
                animeRecommendations?
                <RecommendationResults/>
                :
                <RecommendationForm/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})