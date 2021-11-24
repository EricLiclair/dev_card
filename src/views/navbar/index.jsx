// import { styled } from '@mui/material/styles';
import {
    Menu as MenuIcon,
    DashboardRounded,
    LocalLibraryRounded,
    LogoutRounded,
    LoginRounded
} from '@mui/icons-material';


import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    SwipeableDrawer,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemButton,
    ListItemText,
    Avatar,
} from '@mui/material';
import { useState, useContext } from 'react';
import { userContext } from '../../context/usercontext';
import { signInWithGoogle, signOut } from '../../utils/auth';
// import { signInWithGoogle } from '../../utils/auth/signIn';


export default function Navbar() {
    const { user } = useContext(userContext);
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    }
    const firstName = user?.displayName.split(" ")[0];
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
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Dev Cards
                    </Typography>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer
                anchor='left'
                open={open}
                onClose={toggleDrawer}
            >
                <Box
                    sx={{ width: 300 }}
                    role="presentation"
                >
                    <List>
                        <ListItemButton component="a" href="/">
                            <ListItemIcon sx={{ fontSize: 36 }}>🎴</ListItemIcon>
                            <ListItemText
                                sx={{ my: "0.5rem" }}
                                primary="Dev Cards"
                                primaryTypographyProps={{
                                    fontSize: 24,
                                    fontWeight: 'medium',
                                    letterSpacing: 0,
                                }}
                            />
                        </ListItemButton>
                        <Divider />
                        <ListItem button component='a' href='/dashboard'>
                            <ListItemIcon>
                                <DashboardRounded />
                            </ListItemIcon>
                            <ListItemText
                                primary="Dashboard"
                                secondary="Solve more problems"
                            />
                        </ListItem>
                        <ListItem button component='a' href='/revise'>
                            <ListItemIcon>
                                <LocalLibraryRounded />
                            </ListItemIcon>
                            <ListItemText
                                primary="Revise"
                                secondary="Check what you remember"
                            />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>


                        {user ? <>
                            <ListItem button component='a' href='/profile'>
                                <ListItemIcon>
                                    <Avatar src={user.photoURL} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={firstName[0].toUpperCase() + firstName.substring(1).toLowerCase()}
                                    secondary='You profile settings'
                                />
                            </ListItem>
                            <ListItem button onClick={signOut} >
                                <ListItemIcon>
                                    <LogoutRounded />
                                </ListItemIcon>
                                <ListItemText primary='Sign Out' />
                            </ListItem>
                        </> :
                            <ListItem button onClick={signInWithGoogle} >
                                <ListItemIcon>
                                    <LoginRounded />
                                </ListItemIcon>
                                <ListItemText primary='Sign In' />
                            </ListItem>}



                    </List>
                </Box>
            </SwipeableDrawer>
        </Box>
    );
}