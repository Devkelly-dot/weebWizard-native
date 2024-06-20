import { Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { LoginPage } from "../../loginPage/loginPage";
import { useSelector } from "react-redux";
import { useLogin } from "../../../context/loginContext/loginContext";
import { useSettingsPage } from "../context/settingsPageContext";
import { RegisterPage } from "../../registerPage/registerPage";
import AccountPage from "../../accountPage/accountPage";

export default function AccountContent() {
    const token = useSelector((state)=>state.auth.token);
    const {screen, screens, setScreen} = useSettingsPage();

    useEffect(()=>{
        if (token) {
            setScreen(screens.ACCOUNT);
        } else {
            setScreen(screens.LOGIN);
        }
    }, [token]);

    return (
        <View>
            {
                screen === screens.ACCOUNT ?
                    <AccountPage/>
                :
                screen === screens.REGISTER ?
                    <RegisterPage/>
                :
                    <LoginPage/>
            }
        </View>
    )
}