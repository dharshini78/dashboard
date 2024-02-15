import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import { FaBook } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";


import { CgProfile } from "react-icons/cg";






export const SideBarData = [
    {
        title: 'Courses',
        path: '/',
        icon: <FaBook />,
        cName: 'nav-text'
    },

    {
        title: 'CaseStudy',
        path: '/casestudy',
        icon: <FaUserDoctor />,
        cName: 'nav-text'
    },

  

    
    {
        title: 'Notes',
        path: '/notes',
        icon: <FaPenNib />,
        cName: 'nav-text'
    },

    {
        title: 'Notifications',
        path: '/notifications',
        icon: <FaBell />,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <CgProfile />,
        cName: 'nav-text'
    },

    {
        title: 'Logout',
        path: '/logout',
        icon: <CiLogout />,
        cName: 'nav-text'
    },
]