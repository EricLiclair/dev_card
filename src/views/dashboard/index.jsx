import React from 'react'
import { useContext } from 'react';
import { userContext } from '../../context/usercontext';

export default function Dashboard() {
    const { user } = useContext(userContext);
    return (
        <div>
            This is Dashboard and the user is - {user?.email}
        </div>
    )
}
