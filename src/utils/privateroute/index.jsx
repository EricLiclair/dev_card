import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'


export default function PrivateRoute() {
    const auth = null;
    return auth ? <Outlet /> : <Navigate to='/auth' />
}