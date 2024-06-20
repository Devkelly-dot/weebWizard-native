import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Form from "../../../../components/form/form";
import { useState } from "react";
import StyledButton from "../../../../components/button/styledButton";
import LoginButton from "../loginButton/loginButton";
import { useRegister } from "../../../../context/registerContext/registerContext";

export default function RegisterForm() {
    const {register} = useRegister();
    
    const [form, setForm] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState(null);

    const fields = [
        {
            label: 'Email',
            field: 'email',
            value: form?.email,
            onChange: (v)=>setForm({...form, email: v})
        },
        {
            label: 'Password',
            field: 'password',
            value: form?.password,
            onChange: (v)=>setForm({...form, password: v}),
            secureTextEntry: true
        },
        {
            label: 'Password',
            field: 'confirmPassword',
            value: form?.confirmPassword,
            onChange: (v)=>setForm({...form, confirmPassword: v}),
            secureTextEntry: true
        }
    ];
    
    async function attemptRegister() {
        if(!form.email || !form.password) {
            setError("Please fill out all fields");
            return;
        }
        if(form?.password!==form?.confirmPassword) {
            setError("Passwords do not match");
        }
        const data = await register(form.email?.toLowerCase()?.replace(/\s+/g, ''), form.password)
        if(!data?.token) {
            if(data?.error) {
                setError(data?.error);
            } else {
                setError("Could not register with this email address");
            }
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
            <View style={styles.registerHolder}>
                <StyledButton
                    onPress={attemptRegister}
                    text={"Register"}
                />
            </View>
            <LoginButton/>
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
    registerHolder: {
        marginBottom: 10
    }
})