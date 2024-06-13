import React, { useContext } from 'react';
import { View, ScrollView, StyleSheet, Text, Image } from 'react-native';
import { PopularAnimeContext } from '../../../../context/popularAnime/popularAnimeContext';
import AnimeList from '../../../../components/animeList/animeList';

export default function HomeAnimeList() {
    const { animeList } = useContext(PopularAnimeContext);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.gridContainer}>
                <AnimeList
                    animeList={animeList}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        height: '100%',
    },
    gridContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    }
});