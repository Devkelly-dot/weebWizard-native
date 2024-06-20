import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAccount } from "../../../context/accountContext/accountContext";
import { useLogin } from "../../../context/loginContext/loginContext";
import { FontAwesome } from '@expo/vector-icons';
import StyledButton from '../../../components/button/styledButton';

export default function AccountContent() {
    const { account } = useAccount();
    const { logout } = useLogin();

    return (
        <View style={styles.container}>
            <View style={styles.accountInfoContainer}>
                <FontAwesome name="user-circle" size={80} color="dodgerblue" style={styles.icon} />
                <Text style={styles.emailText}>{account?.email}</Text>
            </View>
            <StyledButton
                text={'Logout'}
                onPress={logout}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f8ff',
    },
    accountInfoContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    icon: {
        marginBottom: 10,
    },
    emailText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    }
});