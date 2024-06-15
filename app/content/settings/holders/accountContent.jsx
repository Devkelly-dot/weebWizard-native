import { Text, View } from "react-native";
import LoginForm from "../components/loginForm/loginForm";
import { useState } from "react";

const screens = {
    LOGIN: 'login',
    REGISTER: 'register',
    FORGOT: 'forgot',
    ACCOUNT: 'account'
}
export default function AccountContent() {
    const [screen, setScreen] = useState(screens.LOGIN);
    
    return (
        <View>
            <LoginForm/>
        </View>
    )
}