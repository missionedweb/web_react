import React from 'react';
import { Dashboard, ViewList, Folder, Person, Chat, Settings } from '@material-ui/icons';

export const SideBarData = [
    {
        title: 'Dashboard',
        path:'/dashboard',
        icon: <Dashboard />
    },
    {
        title: 'All courses',
        path:'/dashboard/courses',
        icon: <ViewList />
    },
    {
        title: 'Resources',
        path:'/dashboard/resources',
        icon: <Folder />
    },
    {
        title: 'Referals',
        path:'/dashboard/referals',
        icon: <Person />
    },
    {
        title: 'Chats',
        path:'/dashboard/chats',
        icon: <Chat />
    },
    {
        title: 'Settings',
        path:'/dashboard/settings',
        icon: <Settings />
    },
]
