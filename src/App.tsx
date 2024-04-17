import {PasswordGeneration} from "./components";
import {Box, ThemeProvider} from "@mui/material";
import {useTheme} from "./hooks";
import styles from './App.module.scss';


function App() {
    const theme = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <div className={styles.app}>
                <Box width="400px">
                    <PasswordGeneration/>
                </Box>
            </div>
        </ThemeProvider>
    );
}

export default App;
