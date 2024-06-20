import { Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { LoginPage } from "../../loginPage/loginPage";
import { useSelector } from "react-redux";
import { useLogin } from "../../../context/loginContext/loginContext";
import { useSettingsPage } from "../context/settingsPageContext";
import { RegisterPage } from "../../registerPage/registerPage";

export default function AccountContent() {
    const token = useSelector((state)=>state.auth.token);
    const {logout} = useLogin();
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
                screen === screens.LOGIN ?
                    <LoginPage/>
                :
                screen === screens.REGISTER ?
                    <RegisterPage/>
                :
                    <View>
                        <Text>
                            Account
                        </Text>
                        <TouchableOpacity onPress={()=>logout()}>
                            <Text>
                                Logout
                            </Text>
                        </TouchableOpacity>
                    </View>
            }
        </View>
    )
}