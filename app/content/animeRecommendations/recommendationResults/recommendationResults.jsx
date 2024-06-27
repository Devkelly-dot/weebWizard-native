import { useEffect, useState } from "react";
import { useAnimeRecommendations } from "../../../context/animeRecommendationsContext/animeRecommendationsContext";
import { authGet } from "../../../../utils/authFetch";
import { ActivityIndicator, ActivityIndicatorBase, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import StyledButton from "../../../components/button/styledButton";

export default function RecommendationResults() {
    const {setAnimeRecommendations, setAnimeRecommendationsForm, 
        animeRecommendations} = useAnimeRecommendations();

    const [recommendationList, setRecommendationList] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        async function fetchDetails() {
            let recDetailedList = [];
            for(let i=0; i<animeRecommendations?.recommendations?.length; i++) {
                const anime = animeRecommendations?.recommendations[i];
                const title = anime.title;

                console.log("title: ", title);
                const response = await authGet(`v1/anime/search?title=${title}`);
                const first_anime = response[0];
                recDetailedList.push({...first_anime, title: anime?.title, reason: anime?.reason});
            }
            setRecommendationList(recDetailedList);
        }

        try {
            fetchDetails();
        } catch (e) {
            console.log(e);
        }
    }, [animeRecommendations]);

    useEffect(()=>{

    }, [recommendationList]);

    function resetRecommendations() {
        setAnimeRecommendationsForm({title: '', reason: ''});
        setError(null);
        setAnimeRecommendations(null);
    }
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => { router.push(`/animePreSearch/${item?.title}`) }}>
            <View style={styles.itemContainer}>
                <Image source={{ uri: item.picture_url }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.reason}>You would like {item.title} because: </Text>
                    <Text style={styles.description}>{item.reason}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {
                !recommendationList ? 
                <View style={styles.loadingHolder}> 
                    <Text>Loading Anime Recommendation Details...</Text>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
                :
                <View style={{height: '100%'}}>
                    {error && <Text style={styles.errorText}>Error: {error.message}</Text>}
                    {!loading && !error && recommendationList.length === 0 && query && (
                        <Text style={styles.noResultsText}>No results found.</Text>
                    )}
                    {!loading && !error && recommendationList.length === 0 && !query && (
                        <Text style={styles.noResultsText}>Please search for an anime.</Text>
                    )}
                    {!loading && !error && recommendationList.length > 0 && (
                        <FlatList
                            data={recommendationList}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.myanimelist_id.toString()}
                        />
                    )}

                    <View>
                        <StyledButton
                            text={'Find New Recommendations'}
                            onPress={resetRecommendations}
                        />
                    </View>
                </View>
            }
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 8,
    },
    searchButton: {
        padding: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        elevation: 2,
    },
    image: {
        width: 100,
        height: 140,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#333',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
    },
    noResultsText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#333',
    },
    reason: {
        fontWeight: 'bold'
    },
    loadingHolder: {
        height: '100%',
        justifyContent: 'center', 
        alignItems: 'center'
    }
});