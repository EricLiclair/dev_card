import { useTheme } from '@emotion/react'
import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { GoogleSignInButton } from '../../../../theme/components'
import themeOptions from '../../../../theme/themeOptions'

export default function HomeSignIn() {
    return (
        <Box sx={{ width: '100%', maxWidth: 500 }} textAlign='justify'>
            <Typography variant='h2' component='div' gutterBottom>Welcome,</Typography>
            <Typography variant='h5' component='div'>Track your DSA progress</Typography>
            <Typography variant='body1' component='div' gutterBottom>Dev Cards helps you in tracking your Data Structures and Algorithms learning progress </Typography>
            <br />
            <Typography variant='h5' component='div'>Revise with Flash Cards</Typography>
            <Typography variant='body1' component='div' gutterBottom>Now you'll never forget those important points required for solving certain questions. Checkout the revise section. 😉</Typography>
            <br />
            <GoogleSignInButton text='sign in with google' />
            <GoogleSignInButton />
        </Box>
    )
}
