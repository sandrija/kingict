import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MainAppBar from './MainAppBar';


const Main = styled('main', {})(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingBottom: 0,
}));

const Layout = ({ children }) => (
    <Box
        sx={{
            display: 'flex',
            flex: 1,
        }}
    >
        <Main>
            <MainAppBar />
            { children }
        </Main>
    </Box>
);

export default Layout;
