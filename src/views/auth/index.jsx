import React, { useContext } from 'react';

import { userContext } from '../../context/usercontext';
import { Button } from '@mui/material';
// import { useParams } from 'react-router-dom';
import { signInWithGoogle } from '../../utils/auth/signIn';
import { Google } from '@mui/icons-material';
export default function Auth() {

    const { user, loading } = useContext(userContext);

    return (
        <div>
            {loading && <Button>Loading</Button>}
            {user ? `Already signed is as ${user.email}` : <Button variant='contained' color='secondary' startIcon={<Google />} onClick={signInWithGoogle}>Google</Button>}
        </div >
    )
}

