import React from "react";
import {
  Dashboard,
  Work,
  Settings,
  PersonOutlineOutlined,
  MailOutline,
  Laptop,
  Ballot,
  CalendarToday,
} from "@material-ui/icons";

export const SideBarData = [
  {
    title: "Profile",
    path: "/dashboard/profile",
    icon: <PersonOutlineOutlined />,
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <Dashboard />,
  },

  {
    title: "Messages",
    path: "/dashboard/Messages",
    icon: <MailOutline />,
  },
  {
    title: "Grades",
    path: "/dashboard/grades",
    icon: <Ballot />,
  },
  {
    title: "Calender",
    path: "/dashboard/Calender",
    icon: <CalendarToday />,
  },
  {
    title: "Community",
    path: "/dashboard/Community",
    icon: <Laptop />,
  },
  {
    title: "Jobs",
    path: "/dashboard/jobs",
    icon: <Work />,
  },
];
