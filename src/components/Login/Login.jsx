import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useApp } from '../App/AppProvider';

const noErrors = {
    email: null,
    password: null,
    other: null,
};

const Login = ({ open, closeForm }) => {
    const { logIn } = useApp();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword(!showPassword);
    const [errors, setErrors] = useState(noErrors);
    const clearErrors = () => setErrors(noErrors);
    const isLoginButtonDisabled = !username || !password;

    const resetFormFields = () => {
        setUsername('');
        setPassword('');
    }

    const onCloseForm = () => {
        clearErrors();
        resetFormFields();
        closeForm();
    };

    const onLoginSubmit = async () => {
        clearErrors();
        try {
            await logIn({ username, password });
            onCloseForm();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Dialog
            open={open}
            onClose={() => onCloseForm()}
            maxWidth="md"
        >
            <DialogTitle>
                Login
            </DialogTitle>
            <DialogContent>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <TextField
                        id="input-username"
                        name="username"
                        label="Korisničko ime"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        error={Boolean(errors.username)}
                        helperText={errors.username ?? ""}
                    />
                    <TextField
                        id="input-password"
                        data-testid="input-password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        label="Šifra"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={Boolean(errors.password)}
                        helperText={errors.password ?? ""}
                        sx={{
                            marginTop: '20px',
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={toggleShowPassword}
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                        }}
                                        size="large"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={() => onCloseForm()}
                >
                    Odustani
                </Button>
                <Button
                    type="submit"
                    onClick={() => onLoginSubmit()}
                    disabled={isLoginButtonDisabled}
                >
                    Logiraj se
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Login;
