import { Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function PrivacyPolicy({privacyAgreed, setPrivacyAgreed, privacyClicked, setPrivacyClicked, 
    termsAgreed, setTermsAgreed, termsClicked, setTermsClicked}) {

    function onPrivacyAgree() {
        setPrivacyAgreed(!privacyAgreed);
    }

    function onTermsAgree() {
        setTermsAgreed(!termsAgreed);
    }
        
    const openLink = (url) => {
        console.log("hurr")
        Linking.openURL(url); // Replace with your actual URL
    };

    return (
        <View style={styles.container}>
            <View style={styles.agreementHolder}>
                <BouncyCheckbox
                    onPress={() => onPrivacyAgree()}
                    isChecked={privacyAgreed}
                />
                <View style={styles.textHolder}>
                    <Text>I agree to WeebWizard's </Text>
                    <TouchableOpacity
                        onPress={() => {
                            setPrivacyClicked(true);
                            openLink('https://www.weebwizard.com/privacy');
                        }}
                    >
                        <Text style={{ color: privacyClicked ? 'green' : 'blue', textDecorationLine: 'underline' }}>
                            Privacy Policy
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.agreementHolder}>
                <BouncyCheckbox
                    onPress={() => onTermsAgree()}
                    isChecked={termsAgreed}
                />
                <View style={styles.textHolder}>
                    <Text>I agree to WeebWizard's </Text>
                    <TouchableOpacity
                        onPress={() => {
                            setTermsClicked(true);
                            openLink('https://www.weebwizard.com/terms');
                        }}
                    >
                        <Text style={{ color: termsClicked ? 'green' : 'blue', textDecorationLine: 'underline' }}>
                            Terms And Conditions
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10,
        marginBottom: 10
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        marginVertical: 10,
    },
    registerHolder: {
        marginBottom: 10
    },
    agreementHolder: {
        flexDirection: 'row',
        marginVertical: 10,
        gap: 10
    },
    textHolder: {
        flexDirection: 'row',
    },
    agreementHolder: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})