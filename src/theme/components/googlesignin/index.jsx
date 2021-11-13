import { Button } from '@mui/material';
import React, { useState } from 'react';
import { signInWithGoogle } from '../../../utils/auth/signIn';
import { GoogleIcon } from '../../../assets/lottie';
import { Google } from '@mui/icons-material';

export default function GoogleSignInButton({ text = 'sign in', ...props }) {
    const [play, setPlay] = useState(false);
    const animateStart = () => {
        setPlay(true);
    }
    const animateStop = () => {
        setPlay(false);
    }
    return <Button
        {...props}
        onMouseLeave={animateStop}
        onMouseOver={animateStart}
        onClick={signInWithGoogle}
        startIcon={play ? <GoogleIcon /> : <Google sx={{ fontSize: 60 }} />}
    >
        {text}
    </Button >
}
