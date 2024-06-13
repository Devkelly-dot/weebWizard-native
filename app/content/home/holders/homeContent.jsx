import { View } from "react-native";
import HomeAnimeList from "../components/animeList/homeAnimeList";
import HomeTitle from "../components/homeTitle/homeTitle";

export default function HomeContent() {
    return (
        <View>
            <HomeTitle/>
            <HomeAnimeList/>
        </View>
    )
}