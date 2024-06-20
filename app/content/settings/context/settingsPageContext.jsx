import { createContext, useState, useContext } from 'react';

export const SettingsPageContext = createContext();

export const SettingsPageProvider = ({ children }) => {
    const screens = {
        LOGIN: 'login',
        REGISTER: 'register',
        FORGOT: 'forgot',
        ACCOUNT: 'account'
    }
    const [screen, setScreen] = useState(screens.LOGIN);

    return (
        <SettingsPageContext.Provider value={{ screen, setScreen, screens }}>
            {children}
        </SettingsPageContext.Provider>
    );
};

export const useSettingsPage = () => useContext(SettingsPageContext);
