import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import AnimeCard from "../animeCard/animeCard";

export default function AnimeList({animeList, onAnimePress}) {
    const renderGridItems = () => {
        return animeList.map((item, index) => (
            <TouchableOpacity key={index} style={styles.item} onPress={()=>onAnimePress(item)}> 
                <AnimeCard anime={item}/>
            </TouchableOpacity>
        ));
    };

    return (
        <View style={styles.gridContainer}>
            {renderGridItems()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginVertical: 20,
        paddingHorizontal: 10,
    },
    gridContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        height: '100%',
        paddingBottom: '160%'
    },
    item: {
        width: '25%', // Adjust width for the number of columns
        aspectRatio: 0.75, // Aspect ratio for a square-like item (adjust as needed)
        marginVertical: 4,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        overflow: 'hidden', // Ensures items don't overflow their container
    },
});