import React from 'react'
import { useState } from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai'
import ProfileSubmenu from '../Components/ProfileSubmenu'

function ProfileAddMember() {

    const [addMemberMod, setAddMemberMod] = useState(false);

    const toggleAddMemberMod = () => {
        setAddMemberMod(!addMemberMod);
    }

    return (
        <div className=' px-5 sm:px-16 md:px-20 lg:px-32  grid gap-5 grid-cols-8 mt-5'>
            {/* xl:px-40 2xl:px-64 */}
            <div className=' col-span-8 xl:col-span-2'>
                <ProfileSubmenu />
            </div>
            <div className=' p-3 sm:p-8 rounded-md bg-white shadow-custom col-span-8 xl:col-span-6 '>
                <div className={`${addMemberMod ? "hidden" : "block"}`}>
                    <div>
                        <p className='font-medium text-lg'>Co-Traveler List</p>
                        <p className=' text-[12px] text-gray-500'>You have 0 traveller(s)</p>
                    </div>
                    <div className=' mt-5'>
                        <p className=' font-medium text-xl'>Flight Expert User</p>
                        <p className=' text-gray-500 text-[12px]'>saykothossain@gmail.com</p>
                    </div>
                    <span className=' block w-full h-[2px] bg-primary mt-10'></span>
                    <div onClick={toggleAddMemberMod} className=' mt-5 flex items-center text-primary cursor-pointer'>
                        <AiOutlineUserAdd className=' text-lg mr-1' />
                        <button>Add Member</button>
                    </div>
                </div>
                <div className={`${!addMemberMod ? "hidden" : "block"}`}>
                    <div className=''>
                        <p className=' text-base sm:text-xl md:text-2xl font-medium '>Personal Details</p>
                        <p className=' text-gray-500 text-[12px] sm:text-sm my-1 sm:my-2'>As mentioned on your passport or government approved IDs</p>


                        <div className=' grid grid-cols-1 xl:grid-cols-2 gap-3 mt-5'>
                            <div className=''>
                                <label htmlFor="First Name" className=' font-medium text-sm mb-1 text-gray-500'>First Name</label>
                                <input type="text" id='First Name' className=' border border-gray-500 rounded py-1 px-2 w-full mt-1 focus:outline-none' />
                            </div>
                            <div className=''>
                                <label htmlFor="Last Name" className=' font-medium text-sm mb-1 text-gray-500'>Last Name</label>
                                <input type="text" id='Last Name' className=' border border-gray-500 rounded py-1 px-2 w-full mt-1 focus:outline-none' />
                            </div>
                            <div className=''>
                                <label htmlFor="BirthDay" className=' font-medium text-sm mb-1 text-gray-500'>BirthDay</label>
                                <input type="date" id='BirthDay' className=' border border-gray-500 rounded py-1 px-2 w-full mt-1 focus:outline-none' />
                            </div>
                            <div className=''>
                                <label htmlFor="City" className=' font-medium text-sm mb-1 text-gray-500'>City</label>
                                <input type="text" id='City' className=' border border-gray-500 rounded py-1 px-2 w-full mt-1 focus:outline-none' />
                            </div>

                        </div>
                        <div className=''>
                            <label htmlFor="Country" className=' font-medium text-sm mb-1 text-gray-500'>Country</label>
                            <input type="text" id='Country' className=' border border-gray-500 rounded py-1 px-2 w-full mt-1 focus:outline-none' />
                        </div>

                        <div className=' mt-5'>
                            <p className='  text-base sm:text-xl md:text-2xl font-medium '>Passport information</p>
                            <p className=' text-gray-500 text-[12px] my-3'>Travelers holding passport can fill up the the below form which will save more time during flight booking.</p>
                            <div className=' grid grid-cols-1 xl:grid-cols-2 gap-3 mt-5'>
                                <div className=''>
                                    <label htmlFor="Passport Number" className=' font-medium text-sm mb-1 text-gray-500'>Passport Number</label>
                                    <input type="text" id='Passport Number' className=' border border-gray-500 rounded py-1 px-2 w-full mt-1 focus:outline-none' />
                                </div>
                                <div className=''>
                                    <label htmlFor="Passport Expiry Date" className=' font-medium text-sm mb-1 text-gray-500'>Passport Expiry Date</label>
                                    <input type="text" id='Passport Expiry Date' className=' border border-gray-500 rounded py-1 px-2 w-full mt-1 focus:outline-none' />
                                </div>
                            </div>
                        </div>
                        <div className=' mt-10 flex flex-wrap'>
                            <button className=' rounded-md border border-primary bg-white text-primary py-1 sm:py-2 px-2 sm:px-6 hover:bg-primary hover:text-white hover:transition-all hover:ease-in hover:duration-300 cursor-pointer'>Save & Close</button>
                            <button onClick={toggleAddMemberMod} className=' rounded-md border border-primary bg-white text-primary py-1 sm:py-2 px-2 sm:px-6 ml-3 hover:bg-primary hover:text-white hover:transition-all hover:ease-in hover:duration-300 cursor-pointer'>Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileAddMember