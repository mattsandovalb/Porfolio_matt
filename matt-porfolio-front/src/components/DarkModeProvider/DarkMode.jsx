import React, { useState, createContext, useContext, useMemo } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';


export const DarkModeContext = createContext({
    toggleColorMode: () => { }
});

export const DarkModeProvider = ({ children }) => {
    const [mode, setMode] = useState("dark");
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );


    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    ...(mode === 'light' && {
                        primary: {
                            main: '#FFFFF',
                        },
                        background: {
                            default: '#00000',
                            paper: '#fefcfe',
                        },
                        text: {
                            secondary: '#00000',
                        },
                        divider: '#1D182F',
                    }),
                    ...(mode === 'dark' && {
                        primary: {
                            main: '#00000',
                        },
                        background: {
                            default: '#000000',
                            paper: '#000000',
                        },
                        text: {
                            secondary: '#FFFFFF',
                        },
                        divider: '#F7F7FD',
                    }),
                    secondary: {
                        main: '#f50057',
                    },
                    
                }
            }),
        [mode],
    );

    return (
        <DarkModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </DarkModeContext.Provider>
    );
};

const useDarkMode = () => {
    const context = useContext(DarkModeContext);

    if (context === undefined) {
        throw new Error("useColorMode must be used within a ColorProvider");
    }
    return context;
};

export default useDarkMode;