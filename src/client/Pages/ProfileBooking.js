import React from 'react'
import ProfileSubmenu from '../Components/ProfileSubmenu'
import noresult from "../Photos/no-result.gif"

function ProfileBooking() {
    return (
        <div className=' px-5 sm:px-16 md:px-20 lg:px-32 grid gap-5 grid-cols-8 mt-5'>
            {/* xl:px-40 2xl:px-64 */}
            <div className=' col-span-8 xl:col-span-2'>
                <ProfileSubmenu />
            </div>
            <div className=' p-10 pt-0 rounded-md bg-white shadow-custom col-span-8 xl:col-span-6 flex justify-center'>
                <div className=''>
                    <img src={noresult} alt="" />
                    <p className=' text-center font-medium text-xl mt-5'>Sorry !</p>
                    <p className=' text-center mt-2 font-medium'>No Flight Booking History Found</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileBooking