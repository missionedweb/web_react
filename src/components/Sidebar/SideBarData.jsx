import React from 'react';
import { Dashboard, Work, Settings,PersonOutlineOutlined, MailOutline ,Laptop ,Ballot, CalendarToday} from '@material-ui/icons';

export const SideBarData = [
    {
        title:'Profile',
        path:'/profile',
        icon: <PersonOutlineOutlined />
    },
    {
        title: 'Dashboard',
        path:'/dashboard',
        icon: <Dashboard />
    },
    
    {
        title: 'Messages',
        path:'/dashboard/Messages',
        icon: <MailOutline/>
    },
    {
        title: 'Grades',
        path:'/dashboard/Grades',
        icon: <Ballot/>
    },
    {
        title: 'Calender',
        path:'/dashboard/Calender',
        icon: <CalendarToday />
    },
    {
        title: 'Community',
        path:'/dashboard/Community',
        icon: <Laptop />
    },
    {
        title: 'Jobs',
        path:'/dashboard/Jobs',
        icon: <Work />
    },
]
