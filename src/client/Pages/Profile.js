import React from 'react'
import { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineEdit } from 'react-icons/ai'
import ProfileSubmenu from '../Components/ProfileSubmenu'
import profilePhoto from "../Photos/boy.jpg"

function Profile() {

    const [editAbleMode, setEditAbleMode] = useState(false);
    // const [basicInfo, setBasicInfo] = useState({
    //     firstName: "Saykot",
    //     lastName: "Hossain",
    //     birthDay: "1997-04-11"
    // })

    const toggleEditAbleMode = () => {
        setEditAbleMode(!editAbleMode);
    }

    return (
        <div className=' px-5 sm:px-16 md:px-20 lg:px-32  grid gap-5 grid-cols-8 mt-5'>
            {/* xl:px-40 2xl:px-64 */}
            <div className=' col-span-8 xl:col-span-2'>
                <ProfileSubmenu />
            </div>
            <div className='p-1 sm:p-2 pb-10 rounded-md bg-white shadow-custom col-span-8 xl:col-span-6'>
                <div className=' flex justify-between items-center px-0 xsm:px-1 sm:px-3'>
                    <div className=' flex items-center'>
                        <div className='  w-16 h-16  sm:w-24 sm:h-24 md:h-32 md:w-32 rounded-full overflow-hidden'>
                            <img src={profilePhoto} alt="" className=' w-full h-full object-cover' />
                        </div>
                        <p className=' ml-1 xsm:ml-2  sm:ml-5 font-medium text-sm xsm:text-base sm:text-lg'>saykothossain@gmail.com</p>
                    </div>
                    {
                        editAbleMode ?
                            <div onClick={toggleEditAbleMode} className=' flex items-center rounded-3xl border border-primary bg-white text-primary py-[2px] xsm:p-1 sm:py-[6px] px-1 xsm:px-2 sm:px-4 font-medium hover:bg-primary hover:text-white hover:transition-all hover:ease-in hover:duration-300 cursor-pointer'>
                                <AiOutlineArrowLeft className=' mr-0 xl:mr-1 sm:mr-2' />
                                <button>Go Back</button>
                            </div>
                            :
                            <div onClick={toggleEditAbleMode} className=' flex items-center rounded-3xl border border-primary bg-white text-primary py-[2px] xsm:p-1 sm:py-[6px] px-1 xsm:px-2 sm:px-4 font-medium hover:bg-primary hover:text-white hover:transition-all hover:ease-in hover:duration-300 cursor-pointer'>
                                <AiOutlineEdit className=' mr-0 xl:mr-1 sm:mr-2 text-lg' />
                                <button>Edit</button>
                            </div>
                    }
                </div>
                <div className='px-1 sm:px-5 mt-2 sm:mt-5 sm:pb-5'>
                    <p className=' text-base xsm:text-lg sm:text-xl md:text-2xl font-medium '>Personal Details</p>
                    <p className=' text-gray-500 text-[12px] sm:text-sm my-1 sm:my-2'>As mentioned on your passport or government approved IDs</p>
                    <div className=' border py-2 sm:py-5 px-2  sm:px-5 md:px-10 mt-2 sm:mt-5 rounded-3xl'>
                        <p className=' text-base xsm:text-lg sm:text-xl md:text-2xl font-medium '>Basic Info</p>
                        {
                            editAbleMode ?
                                <div className=' grid grid-cols-1 xl:grid-cols-2 gap-3 mt-2'>
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

                                </div>
                                :
                                <div className=''>
                                    <div className=' text-[12px] xsm:text-sm  border-b p-2 flex  my-1'>
                                        <p className=' font-medium w-1/2'>Name</p>
                                        <p className=' text-gray-500'>Saykot Hossain</p>
                                    </div>
                                    <div className=' text-[12px] xsm:text-sm border-b p-2 flex  my-1'>
                                        <p className=' font-medium w-1/2'>Birthday</p>
                                        <p className=' text-gray-500'>---</p>
                                    </div>
                                </div>
                        }
                    </div>
                    <div className='border py-2 sm:py-5 px-2  sm:px-5 md:px-10 mt-2 sm:mt-5 rounded-3xl'>
                        <p className=' text-base xsm:text-lg sm:text-xl md:text-2xl font-medium '>Contact Info</p>
                        {
                            editAbleMode ?
                                <div className=' grid grid-cols-1 xl:grid-cols-2 gap-3 mt-2'>
                                    <div className=''>
                                        <label htmlFor="Contact Number" className=' font-medium text-sm mb-1 text-gray-500'>Contact Number</label>
                                        <input type="number" id='Contact Number' className=' border border-gray-500 rounded py-1 px-2 w-full mt-1 focus:outline-none' />
                                    </div>
                                    <div className=''>
                                        <label htmlFor="Address" className=' font-medium text-sm mb-1 text-gray-500'>Address</label>
                                        <input type="text" id='Address' className=' border border-gray-500 rounded py-1 px-2 w-full mt-1 focus:outline-none' />
                                    </div>
                                    <div className=''>
                                        <label htmlFor="City" className=' font-medium text-sm mb-1 text-gray-500'>City</label>
                                        <input type="text" id='City' className=' border border-gray-500 rounded py-1 px-2 w-full mt-1 focus:outline-none' />
                                    </div>
                                    <div className=''>
                                        <label htmlFor="Country" className=' font-medium text-sm mb-1 text-gray-500'>Country</label>
                                        <input type="text" id='Country' className=' border border-gray-500 rounded py-1 px-2 w-full mt-1 focus:outline-none' />
                                    </div>
                                </div>
                                :
                                <div>
                                    <div className='text-[12px] xsm:text-sm border-b p-2 flex  my-1'>
                                        <p className=' font-medium w-1/2'>Email Address</p>
                                        <p className=' text-gray-500'>saykothossain14@gmail.com</p>
                                    </div>
                                    <div className='text-[12px] xsm:text-sm border-b p-2 flex  my-1'>
                                        <p className=' font-medium w-1/2'>Phone Number</p>
                                        <p className=' text-gray-500'>---</p>
                                    </div>
                                    <div className='text-[12px] xsm:text-sm border-b p-2 flex  my-1'>
                                        <p className=' font-medium w-1/2'>Address</p>
                                        <p className=' text-gray-500'>---</p>
                                    </div>
                                    <div className='text-[12px] xsm:text-sm border-b p-2 flex  my-1'>
                                        <p className=' font-medium w-1/2'>City</p>
                                        <p className=' text-gray-500'>---</p>
                                    </div>
                                    <div className='text-[12px] xsm:text-sm border-b p-2 flex  my-1'>
                                        <p className=' font-medium w-1/2'>Country</p>
                                        <p className=' text-gray-500'>---</p>
                                    </div>
                                    <div className='text-[12px] xsm:text-sm border-b p-2 flex  my-1'>
                                        <p className=' font-medium w-1/2'>Frequent Flyer Number</p>
                                        <p className=' text-gray-500'>---</p>
                                    </div>
                                </div>
                        }
                    </div>
                    <div className='border py-2 sm:py-5 px-2  sm:px-5 md:px-10 mt-2 sm:mt-5 rounded-3xl'>
                        <p className='  text-base xsm:text-lg sm:text-xl md:text-2xl font-medium '>Passport Info</p>
                        {
                            editAbleMode ?
                                <div className=' grid grid-cols-1 xl:grid-cols-2 gap-3 mt-2'>
                                    <div className=''>
                                        <label htmlFor="Passport Number" className=' font-medium text-sm mb-1 text-gray-500'>Passport Number</label>
                                        <input type="text" id='Passport Number' className=' border border-gray-500 rounded py-1 px-2 w-full mt-1 focus:outline-none' />
                                    </div>
                                    <div className=''>
                                        <label htmlFor="Passport Expiry Date" className=' font-medium text-sm mb-1 text-gray-500'>Passport Expiry Date</label>
                                        <input type="text" id='Passport Expiry Date' className=' border border-gray-500 rounded py-1 px-2 w-full mt-1 focus:outline-none' />
                                    </div>
                                </div>
                                :
                                <div>
                                    <div className='text-[12px] xsm:text-sm border-b p-2 flex  my-1'>
                                        <p className=' font-medium w-1/2'>Passport Number</p>
                                        <p className=' text-gray-500'>xxxxxxxxxxxxxxxxxxxxx</p>
                                    </div>
                                    <div className='text-[12px] xsm:text-sm border-b p-2 flex  my-1'>
                                        <p className=' font-medium w-1/2'>Passport Expiry Date</p>
                                        <p className=' text-gray-500'>---</p>
                                    </div>
                                </div>
                        }
                    </div>
                    <div className=' mt-10'>
                        <button className=' rounded-md border border-primary bg-white text-primary py-2 px-6 font-medium hover:bg-primary hover:text-white hover:transition-all hover:ease-in hover:duration-300 cursor-pointer'>Save</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile