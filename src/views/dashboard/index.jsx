import { CircularProgress } from '@mui/material';
import React from 'react'
import { useContext } from 'react';
import { userContext } from '../../context/usercontext';
import MainDashboard from './maindashboard';
import SigninDashboard from './signin';

export default function Dashboard({ userData }) {
    const { user, loading, } = useContext(userContext);
    return (
        <div>
            {loading ? <CircularProgress /> : user ? <MainDashboard userData={userData} /> : <SigninDashboard />}
        </div>
    )
}
