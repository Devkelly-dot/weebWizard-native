import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import StyledButton from '../../../../components/button/styledButton';

export default function HomeTitle() {
    const router = useRouter();

    const handleSearchPress = () => {
        router.push('/animeSearch/animeSearch');
    };

    function recommendPress() {
        router.push('/(tabs)/animeRecommendation');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                <Text style={styles.firstPart}>Weeb</Text>
                <Text style={styles.secondPart}>Wizard</Text>
            </Text>
            <View style={styles.divider}></View>
            <Text style={styles.instructions}>Select An Anime to see where it is Streaming</Text>
            <View style={styles.buttonsContainer}>
                <StyledButton
                    text={`Search All Anime`}
                    onPress={handleSearchPress}
                />
                <StyledButton 
                    text={`Use WeebWizard AI to find a new anime`}
                    onPress={recommendPress}
                    sx={{backgroundColor: '#8e44ad'}}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 10, // Optional: Space between title and divider
    },
    firstPart: {
        color: '#f9e4ff', // First part color (orange)
    },
    secondPart: {
        color: '#e5e4ff', // Second part color (indigo)
    },
    divider: {
        borderBottomColor: '#ccc', // Color of the divider
        borderBottomWidth: 2, // Thickness of the divider
        width: '80%', // Width of the divider (adjust as needed)
    },
    instructions: {
        marginBottom: 10,
    },
    buttonsContainer: {
        gap: 10,
        width: '100%'
    }
});