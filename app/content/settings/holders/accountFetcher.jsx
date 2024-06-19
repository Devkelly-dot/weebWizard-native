import { LoginProvider } from "../../../context/loginContext/loginContext";
import AccountInteractor from "./accountInteractor";

export default function AccountFetcher() {
    return (
        <LoginProvider>
            <AccountInteractor/>
        </LoginProvider>
    )
}