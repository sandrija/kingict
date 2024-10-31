import React from 'react';
import {
    ThemeProvider as MuiThemeProvider,
    StyledEngineProvider,
} from '@mui/material/styles';
import theme from './theme';

export function ThemeProvider({ children }) {
    return (
        <StyledEngineProvider injectFirst>
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </StyledEngineProvider>
    );
}
