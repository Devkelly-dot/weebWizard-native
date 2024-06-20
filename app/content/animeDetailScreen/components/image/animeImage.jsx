import { Image, StyleSheet } from "react-native";

export default function AnimeImage({animeData}) {
    return (
        <Image source={{ uri: animeData?.picture_url }} style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
    }
});