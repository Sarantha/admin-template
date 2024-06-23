import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiShoppingBag } from 'react-icons/fi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';

export const links = [
    {
        title: 'Dashboard',
        links: [
            {
                name: 'overview',
                icon: <FiShoppingBag />,
            },
        ],
    },

    {
        title: 'Appointments',
        links: [
            {
                name: 'Appointments',
                icon: <AiOutlineShoppingCart />,
            }
        ],
    },

    {
        title: 'Billing',
        links: [
            {
                name: 'Earnings',
                icon: <AiOutlineShoppingCart />,
            },
            {
                name: 'Payouts',
                icon: <IoMdContacts />,
            },
            {
                name: 'Reports',
                icon: <IoMdContacts />,
            },
        ],
    },

    {
        title: 'User Management',
        links: [
            {
                name: 'Doctors',
                icon: <AiOutlineShoppingCart />,
            },
            {
                name: 'Staff',
                icon: <IoMdContacts />,
            }
        ],
    },
];