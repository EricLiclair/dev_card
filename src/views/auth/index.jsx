import React, { useEffect, useContext } from 'react';

import { userContext } from '../../context/usercontext';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { signInWithGoogle } from '../../utils/auth/signIn';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
export default function Auth() {

    const { mode } = useParams();
    const { user } = useContext(userContext);

    return (
        <div>
            {user ? `Already signed is as ${user.email}` : <Button variant='contained' onClick={signInWithGoogle}>Google</Button>}
        </div >
    )
}

