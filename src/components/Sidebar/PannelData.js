import React from 'react';
import Dashboard from './Dashboard';
import Courses from './Courses';
import Resources from './Resources';
import Referals from './Referals';
import Chat from './Chat';
import Settings from './Settings';

export const PannelData = [
    {
        path:'/dashboard',
        component: <Dashboard />
    },
    {
        path:'/dashboard/courses',
        component: <Courses />
    },
    {
        path:'/dashboard/resources',
        component: <Resources />
    },
    {
        path:'/dashboard/referals',
        component: <Referals />
    },
    {
        path:'/dashboard/chats',
        component: <Chat />
    },
    {
        path:'/dashboard/settings',
        component: <Settings />
    },
]