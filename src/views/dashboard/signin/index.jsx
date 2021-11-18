import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { GoogleSignInButton } from '../../../theme/components'
export default function SigninDashboard() {
    return (
        <Box sx={{ width: '100%', maxWidth: 500 }} textAlign='justify'>
            <Typography variant='h2' component='div' gutterBottom>😮 Oops!</Typography>
            <Typography variant='h5' component='div'>Looks like you are not signed in</Typography>
            <Typography variant='body1' component='div' gutterBottom>You got this! Let's get going.</Typography>
            <br />
            <Box textAlign='center'>
                <GoogleSignInButton text='sign in with google' />
            </Box>
        </Box>
    )
}
