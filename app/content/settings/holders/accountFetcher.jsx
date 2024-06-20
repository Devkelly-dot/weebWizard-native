import { AccountProvider } from "../../../context/accountContext/accountContext";
import { LoginProvider } from "../../../context/loginContext/loginContext";
import { RegisterProvider } from "../../../context/registerContext/registerContext";
import { SettingsPageProvider } from "../context/settingsPageContext";
import AccountInteractor from "./accountInteractor";

export default function AccountFetcher() {
    return (
        <SettingsPageProvider>
            <LoginProvider>
                <RegisterProvider>
                    <AccountProvider>
                        <AccountInteractor/>
                    </AccountProvider>
                </RegisterProvider>
            </LoginProvider>
        </SettingsPageProvider>
    )
}