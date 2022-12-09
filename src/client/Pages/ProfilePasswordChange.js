import React from 'react'
import ProfileSubmenu from '../Components/ProfileSubmenu'

function ProfilePasswordChange() {
    return (
        <div className=' px-5 sm:px-16 md:px-20 lg:px-32  grid gap-5 grid-cols-8 mt-5'>
            {/* xl:px-40 2xl:px-64 */}
            <div className=' col-span-8 xl:col-span-2'>
                <ProfileSubmenu />
            </div>
            <div className=' px-3 pb-10 pt-0 rounded-md bg-white shadow-custom col-span-8 xl:col-span-6 '>
                <p className=' font-medium text-2xl pt-5'>Change Password</p>
                <div className=' w-full xl:w-1/2 mt-5'>
                    <div className=''>
                        <label htmlFor="New Password" className=' font-medium text-sm mb-1 text-gray-500'>New Password</label>
                        <input type="password" id='New Password' className=' border border-gray-500 rounded py-1 px-2 w-full mt-1 focus:outline-none' />
                    </div>
                    <div className=' mt-2'>
                        <label htmlFor="Confirm Password" className=' font-medium text-sm mb-1 text-gray-500'>Confirm Password</label>
                        <input type="password" id='Confirm Password' className=' border border-gray-500 rounded py-1 px-2 w-full mt-1 focus:outline-none' />
                    </div>
                </div>
                <div className=' mt-5'>
                    <button className=' rounded-md text-sm border border-primary bg-white text-primary py-1 sm:py-2 px-2 sm:px-6 hover:bg-primary hover:text-white hover:transition-all hover:ease-in hover:duration-300 cursor-pointer'>Update Password</button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePasswordChange