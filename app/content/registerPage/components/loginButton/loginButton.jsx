import { View } from "react-native";
import { useSettingsPage } from "../../../settings/context/settingsPageContext";
import StyledButtonText from "../../../../components/button/styledButtonText";

export default function LoginButton() {
    const {setScreen, screens} = useSettingsPage();

    return (
        <View>
            <StyledButtonText
                onPress={()=>setScreen(screens.LOGIN)}
                text={`Already have an account? Login instead`}
            />
        </View>
    )
}