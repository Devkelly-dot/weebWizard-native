import { SafeAreaView } from "react-native-safe-area-context";
import AnimeSearchInteractor from "../content/animeSearch/holders/animeSearchInteractor";
import { AnimeSearchProvider } from "../context/animeSearchContext/animeSearchContext";
import { useLocalSearchParams } from "expo-router";

export default function AnimePreSearch() {
    const { query } = useLocalSearchParams();

    return (
        <SafeAreaView>
            <AnimeSearchProvider startQuery={query}>
                <AnimeSearchInteractor/>
            </AnimeSearchProvider>
        </SafeAreaView>
    )
}