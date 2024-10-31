import React from 'react';
import { AppProvider } from './AppProvider';
import { ThemeProvider } from '../../Theme/ThemeProvider';
import ProductsGrid from '../Products/ProductsGrid';

export default function ProvidedApp() {
    return (
        <ThemeProvider>
            <AppProvider>
                <ProductsGrid />
            </AppProvider>
        </ThemeProvider>
    );
}
