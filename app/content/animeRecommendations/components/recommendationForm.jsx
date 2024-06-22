import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import StyledButton from "../../../components/button/styledButton";
import Form from "../../../components/form/form";
import { useAnimeRecommendations } from "../../../context/animeRecommendationsContext/animeRecommendationsContext";

export default function RecommendationForm() {
    const {animeRecommendationsForm, setAnimeRecommendationsForm, getAnimeRecommendations, animeRecommendations, animeRecommendationsLoading, error, setError} = useAnimeRecommendations();

    const fields = [
        {
            label: 'Similar Anime (Optional)',
            field: 'title',
            value: animeRecommendationsForm?.title,
            onChange: (v)=>setAnimeRecommendationsForm({...animeRecommendationsForm, title: v})
        },
        {
            label: 'What kind of anime do you want to watch?',
            field: 'reason',
            value: animeRecommendationsForm?.reason,
            onChange: (v)=>setAnimeRecommendationsForm({...animeRecommendationsForm, reason: v}),
            sx:{minHeight: 100, marginBottom: 100 },
            multiline: true
        }
    ];
    
    async function attemptGetRecommendations() {
        if(animeRecommendationsForm?.reason) {
            await getAnimeRecommendations();
        } else {
            setError('Please enter what kind of anime you want to watch')
        }
    }
    
    return (
        <View style={styles.container}>
            <Form
                fields={fields}
            />
            {
                error && 
                <Text style={styles.errorText}>{error}</Text>
            }
            <View style={styles.loginHolder}>
                <StyledButton
                    text={"Find Anime"}
                    onPress={attemptGetRecommendations}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        marginVertical: 10,
    },
    loginHolder: {
        marginBottom: 10
    }
})