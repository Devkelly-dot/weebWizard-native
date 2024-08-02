import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import StyledButton from "../../../components/button/styledButton";
import Form from "../../../components/form/form";
import { useAnimeRecommendations } from "../../../context/animeRecommendationsContext/animeRecommendationsContext";
import { useSubscription } from "../../../context/subscription/subscriptionContext";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

    
const examples = [
    'I want to watch an anime with a female protagonist and awesome mech fights',
    'I want a slice of life anime with cats or other cute animals',
    'I want to see an anime like Death Note with gritty detective themes and a cat and mouse game',
    'I want a really scary anime',
    'Give me an anime about ghosts',
    'I\'m looking for an anime with samurai fighting scenes and deep philosophical themes.',
    'Recommend an anime similar to Attack on Titan with intense action and moral dilemmas.',
    'I want to watch an anime with time travel and a romantic subplot.',
    'Give me an anime that explores dystopian futures and cybernetic enhancements.',
    'I\'m searching for an anime about competitive sports and overcoming personal challenges.',
    'Recommend an anime that blends magic and high school romance.',
    'I want to see an anime with space exploration and alien encounters.',
    'Give me an anime that features historical events and supernatural elements.',
    'Recommend an anime with strong female leads and political intrigue.',
    'I\'m looking for an anime based on a popular manga series with complex character development.',
    'I want an anime about music and friendship',
    'Give me an anime with a school setting and supernatural powers',
    'I want an anime with anthropomorphic animals and a detective plot',
    'I\'m looking for an anime with a post-apocalyptic setting and survival themes',
    'Give me an anime about underwater exploration and mysterious creatures',
    'Recommend an anime with a focus on cooking and culinary adventures',
    'I want to watch an anime with a focus on traditional Japanese folklore and spirits',
    'Give me an anime that involves virtual reality gaming and epic battles',
    'I\'m looking for an anime with a protagonist who gains superpowers unexpectedly',
    'Recommend an anime with a group of friends going on a journey to save the world',
    'I want an anime about the daily life of office workers with a comedic twist',
    'Give me an anime with a time loop and psychological thriller elements',
    'I\'m looking for an anime that explores the consequences of advanced technology on society',
    'Recommend an anime with a strong emphasis on family bonds and loyalty',
    'I want to watch an anime about a musician striving to achieve fame and recognition',
    'Give me an anime with a non-linear narrative and multiple story arcs',
    'I\'m looking for an anime adaptation of a classic literature work',
    'Recommend an anime set in a fantasy world with unique creatures and magical powers'
];

export default function RecommendationForm() {
    const { animeRecommendationsForm, setAnimeRecommendationsForm, getAnimeRecommendations, error, setError } = useAnimeRecommendations();
    const { subscriptionData } = useSubscription();
    const router = useRouter();
    const [placeholderText, setPlaceholderText] = useState(examples[Math.floor(Math.random() * examples.length)]);

    // Use effect to update placeholder text every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * examples.length);
            setPlaceholderText(examples[randomIndex]);
        }, 10000); // Update every 10 seconds

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, []);

    const fields = [
        {
            label: 'Similar Anime (Optional)',
            field: 'title',
            value: animeRecommendationsForm?.title,
            onChange: (v) => setAnimeRecommendationsForm({ ...animeRecommendationsForm, title: v })
        },
        {
            label: 'What kind of anime do you want to watch?',
            field: 'reason',
            value: animeRecommendationsForm?.reason,
            onChange: (v) => setAnimeRecommendationsForm({ ...animeRecommendationsForm, reason: v }),
            sx: { minHeight: 100, marginBottom: 100 },
            multiline: true,
            placeholder: placeholderText,
            max_length: subscriptionData?.subscriptionPlan?.includes?.max_prompt_size
        }
    ];

    async function attemptGetRecommendations() {
        let too_long = false;
        fields?.forEach((f)=>{
            if(f.value?.length > f?.max_length ) {
                too_long = true;
                setError(`Please keep your prompt under ${subscriptionData?.max_length} characters`);
                return;
            }
        });

        if(too_long) {
            setError(`Please keep your prompt under ${subscriptionData?.max_length} characters`);
            return;
        } else {
            setError('')
        }
        if (animeRecommendationsForm?.reason) {
            await getAnimeRecommendations();
        } else {
            setError('Please enter what kind of anime you want to watch');
        }
    }

    return (
        <View style={styles.container}>
            <Form fields={fields} />
            {error && <Text style={styles.errorText}>{error}</Text>}
            <View style={styles.loginHolder}>
                <StyledButton text={"Find Anime"} onPress={attemptGetRecommendations} />
            </View>
            {/* {subscriptionData?.subscriptionPlan?.title === 'free' && (
                <View>
                    <StyledButton
                        sx={{ backgroundColor: '#8e44ad', paddingHorizontal: 0 }}
                        text={"Upgrade Your Weeb Wizard AI"}
                        onPress={() => router.push('/pricing/pricing')}
                    />
                </View>
            )} */}
        </View>
    );
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