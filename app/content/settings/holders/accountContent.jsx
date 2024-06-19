import { Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { LoginPage } from "../../loginPage/loginPage";
import { useSelector } from "react-redux";
import { useLogin } from "../../../context/loginContext/loginContext";

const screens = {
    LOGIN: 'login',
    REGISTER: 'register',
    FORGOT: 'forgot',
    ACCOUNT: 'account'
}
export default function AccountContent() {
    const token = useSelector((state)=>state.auth.token);
    const {logout} = useLogin();
    const [screen, setScreen] = useState(screens.LOGIN);
    
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