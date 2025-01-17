import React from 'react';
import { StyleSheet, ScrollView, View, Text} from "react-native";
import { useAnimeDetails } from "../../../context/animeDetailContext/animeDetailContext";
import { useAnimeAvailability } from '../../../context/animeAvailabilityContext/animeAvailabilityContext';
import AnimeImage from '../components/image/animeImage';
import AnimeTitle from '../components/title/animeTitle';
import AnimeSynopsis from '../components/synopsis/synopsis';
import AnimeStatistics from '../components/statistics/statistics';
import AnimeAvailability from '../components/availability/availability';
import StyledButton from '../../../components/button/styledButton';
import { useRouter } from 'expo-router';

export default function AnimeDetailScreen() {
    const router = useRouter();
    const { animeData, animeDetailsLoading } = useAnimeDetails();
    const {availabilityData, availabilityLoading} = useAnimeAvailability();
    const streamingInfo = availabilityData?.streamingInfo?.us;


    return (
        <ScrollView contentContainerStyle={styles.container}>
            {
                animeData && !animeDetailsLoading? 
                <>
                    <AnimeImage animeData={animeData}/>
                    <AnimeTitle animeData={animeData}/>
                    <View>
                        <StyledButton
                            sx={{ backgroundColor: '#8e44ad', marginBottom: 10 }}
                            text={"Suggest Anime Like This"}
                            onPress={() => router.push(`animeRecommendation/${animeData?.title_en?animeData.title_en:animeData.title_ov}`)}
                        />
                    </View>
                    <AnimeSynopsis animeData={animeData}/>
                    <AnimeStatistics animeData={animeData}/>
                </>
                :
                animeDetailsLoading ?
                <Text>Loading Anime Data...</Text>
                :
                <Text>Could not get Anime Data</Text>
            }
            {
                streamingInfo && !availabilityLoading? 
                <AnimeAvailability streamingInfo={streamingInfo}/>
                :
                availabilityLoading?
                <Text>Loading Streaming Info...</Text>
                :
                <Text>Could not get Streaming Info</Text>
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        minHeight: '100%'
    }
});