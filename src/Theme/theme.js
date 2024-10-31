import { createTheme } from '@mui/material/styles';
import { green, purple, orange, red, blue } from '@mui/material/colors';

export const colors = {
    green: {
        ...green,
        500: "#09804C",
        A400: "#B9EACD",
    },
    purple: {
        ...purple,
        500: "#6200EE",
        A400: "#9795F9",
    },
    orange,
    red,
    blue,
};

export const themeConfig = {
    palette: {
        primary: colors.green,
        secondary: colors.green,
    },
}

const theme = createTheme(themeConfig);
export default theme;
