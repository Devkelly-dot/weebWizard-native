import { LoginProvider } from "../../../context/loginContext/loginContext";
import { RegisterProvider } from "../../../context/registerContext/registerContext";
import { SettingsPageProvider } from "../context/settingsPageContext";
import AccountInteractor from "./accountInteractor";

export default function AccountFetcher() {
    return (
        <SettingsPageProvider>
            <LoginProvider>
                <RegisterProvider>
                    <AccountInteractor/>
                </RegisterProvider>
            </LoginProvider>
        </SettingsPageProvider>
    )
}