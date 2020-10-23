import React from 'react'
import CenterGrid from '../Cards/index';
import {auth} from '../../firebase/firebase.utils';

export function Dashboard() {
    return (
        <div>
            <h1 className="text-muted">Dashboard</h1>
                 <h5>Welcome, {auth.currentUser.displayName}</h5>
            <CenterGrid />
        </div>
    )
}
