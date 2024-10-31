import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MainAppBar from './MainAppBar';


const Main = styled('main', {})(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
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
            <Box sx={{ marginTop: '64px' }}>
                { children }
            </Box>
        </Main>
    </Box>
);

export default Layout;
