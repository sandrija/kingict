import React from 'react';
import { AppProvider } from './AppProvider';
import { ThemeProvider } from '../../Theme/ThemeProvider';
import Products from '../Products/Products';

export default function ProvidedApp() {
    return (
        <ThemeProvider>
            <AppProvider>
                <Products />
            </AppProvider>
        </ThemeProvider>
    );
}
