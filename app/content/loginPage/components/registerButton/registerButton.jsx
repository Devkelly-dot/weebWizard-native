import { Text, TouchableOpacity, View } from "react-native";
import { useSettingsPage } from "../../../settings/context/settingsPageContext";
import StyledButtonText from "../../../../components/button/styledButtonText";

export default function RegisterButton() {
    const {setScreen, screens} = useSettingsPage();

    return (
        <View>
            <StyledButtonText
                onPress={()=>setScreen(screens.REGISTER)}
                text={`Don't have an account? Register instead`}
            />
        </View>
    )
}