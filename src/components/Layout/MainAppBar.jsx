import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useApp } from '../App/AppProvider';
import Login from '../Login/Login';

function MainAppBar() {
    const { currentUser } = useApp();
    const [showLogin, setShowLogin] = useState(false);
    return (
        <AppBar position="fixed">
            <Toolbar
                sx={{
                    alignSelf: 'flex-end',
                }}
            >
                {
                    !currentUser && (
                        <IconButton
                            color="inherit"
                            aria-label="login"
                            onClick={() => setShowLogin(true)}
                        >
                            <LoginIcon />
                        </IconButton>
                    )
                }
                {
                    currentUser && (
                        <IconButton
                            color="inherit"
                            aria-label="user"
                        >
                            <PersonIcon />
                        </IconButton>
                    )
                }
                <Typography variant="h6" noWrap component="div">
                    App bar title
                </Typography>
            </Toolbar>
            <Login
                open={showLogin}
                closeForm={() => setShowLogin(false)}
            />
        </AppBar>
    );
}

export default MainAppBar;
