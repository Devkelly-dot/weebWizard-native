import { StyleSheet, Text, View } from "react-native"

export default function AnimeStatistics({animeData}) {
    
    return (
        <View style={styles.statistics}>
            <Text style={styles.statText}>Score: {animeData?.statistics.score}</Text>
            <Text style={styles.statText}>Ranked: {animeData?.statistics.ranked}</Text>
            <Text style={styles.statText}>Popularity: {animeData?.statistics.popularity}</Text>
            <Text style={styles.statText}>Members: {animeData?.statistics.members}</Text>
            <Text style={styles.statText}>Favorites: {animeData?.statistics.favorites}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    statistics: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        marginBottom: 10
    },
    statText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
})