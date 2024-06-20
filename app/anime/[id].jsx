import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AnimeDetailScreen() {
    const { id } = useLocalSearchParams();

    return (
        <SafeAreaView>
            <Text>{id}</Text>
        </SafeAreaView>
    )
}