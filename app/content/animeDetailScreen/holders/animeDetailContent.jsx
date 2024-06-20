import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import { useAnimeDetails } from "../../../context/animeDetailContext/animeDetailContext";
import { useAnimeAvailability } from '../../../context/animeAvailabilityContext/animeAvailabilityContext';
import AnimeImage from '../components/image/animeImage';
import AnimeTitle from '../components/title/animeTitle';
import AnimeSynopsis from '../components/synopsis/synopsis';
import AnimeStatistics from '../components/statistics/statistics';
import AnimeAvailability from '../components/availability/availability';

export default function AnimeDetailScreen() {
    const { animeData } = useAnimeDetails();
    const {availabilityData} = useAnimeAvailability();
    const streamingInfo = availabilityData?.streamingInfo?.us;


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <AnimeImage animeData={animeData}/>
            <AnimeTitle animeData={animeData}/>
            <AnimeSynopsis animeData={animeData}/>
            <AnimeStatistics animeData={animeData}/>
            <AnimeAvailability streamingInfo={streamingInfo}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
    }
});