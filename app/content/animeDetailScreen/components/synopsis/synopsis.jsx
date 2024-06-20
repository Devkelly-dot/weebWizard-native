import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AnimeSynopsis({animeData}) {
    const [showFullSynopsis, setShowFullSynopsis] = useState(false);

    const toggleSynopsis = () => {
        setShowFullSynopsis(!showFullSynopsis);
    };

    return (
        <View style={styles.synopsisContainer}>
            <Text style={styles.synopsis}>
                {showFullSynopsis ? animeData?.synopsis : `${animeData?.synopsis?.substring(0, 150)}...`}
            </Text>
            <TouchableOpacity onPress={toggleSynopsis}>
                <Text style={styles.readMore}>{showFullSynopsis ? 'Read Less' : 'Read More'}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    synopsisContainer: {
        paddingHorizontal: 10,
    },
    synopsis: {
        fontSize: 16,
        textAlign: 'justify',
        color: '#333',
        marginBottom: 10,
    },
    readMore: {
        fontSize: 16,
        color: '#1e90ff',
        textAlign: 'center',
        marginBottom: 10
    }
});