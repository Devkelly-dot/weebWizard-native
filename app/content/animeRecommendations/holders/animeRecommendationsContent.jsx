import { ActivityIndicator, StyleSheet, View } from "react-native";
import RecommendationForm from "../components/recommendationForm";
import { useAnimeRecommendations } from "../../../context/animeRecommendationsContext/animeRecommendationsContext";

export default function AnimeRecommendationsContent() {
    const {animeRecommendationsLoading} = useAnimeRecommendations();
    return (
        <View>
            {
                animeRecommendationsLoading ?
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
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