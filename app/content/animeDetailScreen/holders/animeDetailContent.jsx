import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import { useAnimeDetails } from "../../../context/animeDetailContext/animeDetailContext";
import { useAnimeAvailability } from '../../../context/animeAvailabilityContext/animeAvailabilityContext';

export default function AnimeDetailScreen() {
    const { animeData } = useAnimeDetails();
    const {availabilityData} = useAnimeAvailability();
    const streamingInfo = availabilityData?.streamingInfo?.us;

    const [showFullSynopsis, setShowFullSynopsis] = useState(false);

    const toggleSynopsis = () => {
        setShowFullSynopsis(!showFullSynopsis);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{ uri: animeData?.picture_url }} style={styles.image} />
            <Text style={styles.titleEn}>{animeData?.title_en}</Text>
            <Text style={styles.titleOv}>({animeData?.title_ov})</Text>
            <View style={styles.synopsisContainer}>
                <Text style={styles.synopsis}>
                    {showFullSynopsis ? animeData?.synopsis : `${animeData?.synopsis.substring(0, 150)}...`}
                </Text>
                <TouchableOpacity onPress={toggleSynopsis}>
                    <Text style={styles.readMore}>{showFullSynopsis ? 'Read Less' : 'Read More'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.statistics}>
                <Text style={styles.statText}>Score: {animeData?.statistics.score}</Text>
                <Text style={styles.statText}>Ranked: {animeData?.statistics.ranked}</Text>
                <Text style={styles.statText}>Popularity: {animeData?.statistics.popularity}</Text>
                <Text style={styles.statText}>Members: {animeData?.statistics.members}</Text>
                <Text style={styles.statText}>Favorites: {animeData?.statistics.favorites}</Text>
            </View>
            <View style={styles.streamingSection}>
                <Text style={styles.streamingTitle}>Available On:</Text>
                {streamingInfo?.map((service, index) => (
                    <View key={index} style={styles.streamingService}>
                        <Text style={styles.serviceText}>{service.service}</Text>
                        <Text style={styles.serviceDetails}>Type: {service.streamingType}</Text>
                        {service.quality && <Text style={styles.serviceDetails}>Quality: {service.quality}</Text>}
                        {service.price && <Text style={styles.serviceDetails}>Price: {service.price.formatted}</Text>}
                        <TouchableOpacity onPress={() => Linking.openURL(service.link)}>
                            <Text style={styles.serviceLink}>Watch here</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
    },
    titleEn: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
        marginBottom: 5,
    },
    titleOv: {
        fontSize: 18,
        fontStyle: 'italic',
        textAlign: 'center',
        color: '#666',
        marginBottom: 20,
    },
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
    },
    statistics: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        marginBottom: 10
    },
    statText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
    streamingSection: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        marginBottom: 20,
    },
    streamingTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    streamingService: {
        marginBottom: 15,
    },
    serviceText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    serviceDetails: {
        fontSize: 16,
        color: '#666',
    },
    serviceLink: {
        fontSize: 16,
        color: '#1e90ff',
        marginTop: 5,
    },
});