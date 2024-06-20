import React, { useContext } from 'react';
import { View, ScrollView, StyleSheet, Text, Image } from 'react-native';
import { PopularAnimeContext } from '../../../../context/popularAnime/popularAnimeContext';
import AnimeList from '../../../../components/animeList/animeList';
import { useRouter } from 'expo-router';

export default function HomeAnimeList() {
    const { animeList } = useContext(PopularAnimeContext);
    const router = useRouter();

    return (
        <View style={styles.container}>
            <AnimeList
                animeList={animeList}
                onAnimePress={(anime)=>{router.push(`/anime/${anime.myanimelist_id}`)}}
            />
        </View>
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