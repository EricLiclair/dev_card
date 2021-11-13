import { CircularProgress } from '@mui/material';
import React, { useContext } from 'react';
import { userContext } from '../../context/usercontext';
import HomeSignIn from './components/signin';
import HomeWelcomeBack from './components/welcomeback';

export default function Home() {
    const { user, loading } = useContext(userContext);
    return loading ? <CircularProgress /> : user ? <HomeWelcomeBack /> : <HomeSignIn />
}
