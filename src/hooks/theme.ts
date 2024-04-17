import {useMemo} from "react";
import {createTheme, ThemeOptions} from "@mui/material/styles";

export const themeSettings = (): ThemeOptions => {
    return {
        components: {
            MuiButton: {
                styleOverrides: {
                    outlined: {
                        color: '#000',
                        borderColor: 'grey',
                        background: '#8cfbda',
                        '&:hover': {
                            borderColor: 'grey',
                            background: '#73debe',
                        }
                    },
                },
            },
            MuiSlider: {
                styleOverrides: {
                    rail: {
                        background: '#ebebeb',
                        border: '1px solid #a0a0a0',
                    }
                },
            },
        },
        palette: {
            primary: {
                main: '#3273f5'
            }
        },
        typography: {
            button: {
                textTransform: 'none',
            }
        },
    };
};

export const useTheme = () => {
    return useMemo(() => createTheme(themeSettings()), []);
};
