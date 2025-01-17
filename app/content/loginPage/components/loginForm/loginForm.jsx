import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Form from "../../../../components/form/form";
import { useState } from "react";
import { useLogin } from "../../../../context/loginContext/loginContext";
import StyledButton from "../../../../components/button/styledButton";
import RegisterButton from "../registerButton/registerButton";

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
        const data = await login(form.email?.toLowerCase()?.replace(/\s+/g, ''), form.password);
        if(!data?.token) {
            if(data?.error) {
                setError(data?.error);
            } else {
                setError("Incorrect Email / Password Combination");
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
            <View style={styles.loginHolder}>
                <StyledButton
                    onPress={attemptLogin}
                    text={"Login"}
                />
            </View>
            <RegisterButton/>
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