import React from 'react'
import ProfileSubmenu from '../Components/ProfileSubmenu'
import noresult from "../Photos/no-result.gif"

function ProfilePamentLinks() {
    return (
        <div className=' px-5 sm:px-16 md:px-20 lg:px-32  grid gap-5 grid-cols-8 mt-5'>
            {/* xl:px-40 2xl:px-64 */}
            <div className=' col-span-8 xl:col-span-2'>
                <ProfileSubmenu />
            </div>
            <div className=' px-3 pb-10 pt-0 rounded-md bg-white shadow-custom col-span-8 xl:col-span-6 '>
                <p className=' font-medium text-xl pt-5'>Payment Links</p>
                <div className='flex justify-center items-center flex-col'>
                    <img src={noresult} alt="" />
                    <p className=' text-center font-medium text-xl mt-5'>Sorry !</p>
                    <p className=' text-center mt-2 font-medium'>No Payment Link Found</p>
                </div>
            </div>
        </div>
    )
}

export default ProfilePamentLinks