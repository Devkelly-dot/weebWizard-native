import { Image, StyleSheet, View } from "react-native";

export default function AnimeCard({anime}) {
    return (
        <View style={styles.item}>
            <Image source={{ uri: anime.picture_url }} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        width: '100%', // Adjust width for the number of columns
        height: '200%',
        aspectRatio: 0.75, // Aspect ratio for a square-like item (adjust as needed)
        marginVertical: 4,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        overflow: 'hidden', // Ensures items don't overflow their container
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        marginBottom: 8,
    },
});