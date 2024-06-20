import { StyleSheet, Text, View } from "react-native";

export default function AnimeTitle({animeData}) {
    return (
        <View>
            <Text style={styles.titleEn}>{animeData?.title_en}</Text>
            <Text style={styles.titleOv}>({animeData?.title_ov})</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleEn: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
        marginBottom: 5,
    },
    titleOv: {
        fontSize: 18,
        fontStyle: 'italic',
        textAlign: 'center',
        color: '#666',
        marginBottom: 20,
    },
});