import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BiUserCircle } from "react-icons/bi"
import { MdPayment } from "react-icons/md"
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { RiLockPasswordLine } from "react-icons/ri"


function ProfileSubmenu() {

    const location = useLocation()
    return (
        <div className=' p-1 sm:p-2 rounded-md bg-white shadow-custom'>
            <Link to="/profile" className={`${location.pathname === "/profile" ? " text-white bg-primary rounded " : " text-primary"} flex items-center py-2 px-3 my-1 cursor-pointer`}>
                <BiUserCircle className=' mr-1 text-2xl' />
                <span >My Profile</span>
            </Link>
            <Link to="/profile/booking" className={`${location.pathname === "/profile/booking" ? " text-white bg-primary rounded " : " text-primary"} flex items-center py-2 px-3 my-1 cursor-pointer`}>
                <BiUserCircle className=' mr-1 text-2xl' />
                <span>My Booking</span>
            </Link>
            <Link to="/profile/links" className={`${location.pathname === "/profile/links" ? " text-white bg-primary rounded " : " text-primary"} flex items-center py-2 px-3 my-1 cursor-pointer`}>
                <MdPayment className=' mr-1 text-2xl' />
                <span >Payment Links</span>
            </Link>
            <Link to="/profile/fnf" className={`${location.pathname === "/profile/fnf" ? " text-white bg-primary rounded " : " text-primary"} flex items-center py-2 px-3 my-1 cursor-pointer`}>
                <AiOutlineUsergroupAdd className=' mr-1 text-2xl' />
                <span >Add Family Members/Friends</span>
            </Link>
            <Link to="/profile/change-password" className={`${location.pathname === "/profile/change-password" ? " text-white bg-primary rounded " : " text-primary"} flex items-center py-2 px-3 my-1 cursor-pointer`}>
                <RiLockPasswordLine className=' mr-1 text-2xl' />
                <span >Change Password</span>
            </Link>
        </div>
    )

}

export default ProfileSubmenu