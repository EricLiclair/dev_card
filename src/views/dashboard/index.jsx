import React from 'react'
import { useContext } from 'react';
import { userContext } from '../../context/usercontext';

export default function Dashboard() {
    const { user, loading } = useContext(userContext);
    return (
        <div>
            {loading ? "loading..." : user ? "This is Dashboard and the user is - {user?.email}" : "Not signed in"}
        </div>
    )
}
