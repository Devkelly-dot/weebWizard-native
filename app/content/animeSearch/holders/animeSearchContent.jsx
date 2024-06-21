import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { useAnimeSearch } from '../../../context/animeSearchContext/animeSearchContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

export default function AnimeSearchContent() {
    const router = useRouter();
    const { animeSearchResults, query, setQuery, loading, error } = useAnimeSearch();
    const [input, setInput] = useState(query);
    const handleSearchPress = () => {
        setQuery(input);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={()=>{router.push(`/anime/${item.myanimelist_id}`)}}>
            <View style={styles.itemContainer}>
                <Image source={{ uri: item.picture_url }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search for an anime..."
                    value={input}
                    onChangeText={setInput}
                />
                <TouchableOpacity onPress={handleSearchPress} style={styles.searchButton}>
                    <Icon name="search" size={20} color="#000" />
                </TouchableOpacity>
            </View>
            {loading && query && <ActivityIndicator size="large" color="#0000ff" />}
            {error && <Text style={styles.errorText}>Error: {error.message}</Text>}
            {!loading && !error && (
                <FlatList
                    data={animeSearchResults}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.myanimelist_id.toString()}
                />
            )}
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
});