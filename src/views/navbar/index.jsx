// import { styled } from '@mui/material/styles';
import { Menu as MenuIcon } from '@mui/icons-material';

// import { useContext, useState } from 'react';
// import { userContext } from '../../context/usercontext';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
} from '@mui/material';
// import { signInWithGoogle } from '../../utils/auth/signIn';


export default function Navbar() {
    // const { user, loading } = useContext(userContext);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Dev Cards
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}