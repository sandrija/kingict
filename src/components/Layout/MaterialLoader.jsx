import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function MaterialLoader() {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                background: 'rgba(255,255,255,0.7)',
                zIndex: 1000,
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: '50px',
                    top: 'calc(50% - 50px)',
                    left: 'calc(50% - 50px)',
                }}
            >
                <CircularProgress size="50px" />
            </Box>
        </Box>
    );
}

export default MaterialLoader;
