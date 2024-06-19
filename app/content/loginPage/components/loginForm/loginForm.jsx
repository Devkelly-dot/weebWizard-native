import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Form from "../../../../components/form/form";
import { useState } from "react";
import { useLogin } from "../../../../context/loginContext/loginContext";
import StyledButton from "../../../../components/button/styledButton";

export default function LoginForm() {
    const {login} = useLogin();
    
    const [form, setForm] = useState({
        email: '',
        password: ''
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
        }
    ];
    
    async function attemptLogin() {
        if(!form.email || !form.password) {
            setError("Please fill out all fields");
            return;
        }
        const data = await login(form.email, form.password)
        if(!data?.token) {
            setError("Incorrect Email / Password Combination");
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
            <StyledButton
                onPress={attemptLogin}
                text={"Login"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        marginVertical: 10,
    },
})