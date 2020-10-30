import React from 'react';
import { Dashboard, ViewList, Folder, Person, Chat, Settings } from '@material-ui/icons';
import ScheduleIcon from '@material-ui/icons/Schedule';
import VideoCallIcon from '@material-ui/icons/VideoCall';
export const TeacherSidebarData = [
    {
        title: 'Dashboard',
        path:'/Teacher/dashboard',
        icon: <Dashboard />
    },
    {
        title: 'Take Live Session',
        path:'/Teacher/dashboard/liveSession',
        icon: <VideoCallIcon />
    },
    {
        title: 'Schedule Classes',
        path:'/Teacher/dashboard/scheduleClass',
        icon: <ScheduleIcon />
    },
    
    {
        title: 'Chats',
        path:'/Teacher/dashboard/teachersChat',
        icon: <Chat />
    },
    {
        title: 'Settings',
        path:'/Teacher/dashboard/Settings',
        icon: <Settings />
    },
]
