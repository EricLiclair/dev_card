import { Google } from '@mui/icons-material';
import { Button, createSvgIcon } from '@mui/material';
import React from 'react';
import { signInWithGoogle } from '../../../utils/auth/signIn';
import GoogleIcon from './google.svg';

export default function GoogleSignInButton({ text = 'sign in' }) {
    return (
        <Button onClick={signInWithGoogle} ><img height={20} src={GoogleIcon} sx={{ padding: 10 }} />{text}</Button>
    )
}
