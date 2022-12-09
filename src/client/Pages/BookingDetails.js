import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Badges from '../Components/Badges'
import SegmentDetails from '../Components/SegmentDetails'
import TravelerComponent from '../Components/TravelerComponent'
import bg from "../Photos/BG.png"
import TimeoutComponent from "../Components/TimeoutComponent"



function BookingDetails() {
    const [dacShowMod, setDACShowMod] = useState(true)
    const [faresummery, setFaresummery] = useState(true)
    const [showBadges, setShowBadges] = useState(false)

    const toggleShowBadges = () => {
        setShowBadges(!showBadges)
    }
    const toggleDACShowMod = () => {
        setDACShowMod(!dacShowMod);
    }
    const togglFaresummery = () => {
        setFaresummery(!faresummery)
    }

    return (
        <div className='px-5 sm:px-16 md:px-20 lg:px-32 '>
            {/* xl:px-40 2xl:px-64 */}
            {
                showBadges &&
                <Badges toggleShowBadges={toggleShowBadges} />
            }
            <div className=' w-full flex justify-between flex-wrap mt-2 sm:mt-8'>
                <p className=' w-full sm:w-1/2 text-lg sm:text-2xl text-primary font-semibold'>Review Your Booking</p>
                <p className=' w-full sm:w-auto text-sm sm:text-base'> <Link to="/booking-list">Flight Selection</Link>{` > `} <span className=' text-primary'>Booking</span></p>
            </div>
            <div className=' w-full mt-5 grid grid-cols-3 gap-7'>
                <div className=' col-span-3 xl:col-span-2'>
                    <div className=' w-full bg-white shadow-custom rounded'>
                        <div className=' flex justify-between px-3 sm:px-5 py-3'>
                            <p className=' font-medium  sm:text-lg'>DAC-SYD</p>
                            <div className=' flex items-center'>
                                <button onClick={toggleShowBadges} className='bg-primary py-1 sm:py-[6px] px-[6px] sm:px-2 rounded text-sm sm:text-base text-white hover:bg-white border-primary border hover:transition-all hover:ease-in hover:duration-300 hover:text-primary'>View Baggage</button>
                                <div onClick={toggleDACShowMod} className=' ml-5 w-7 sm:w-8 h-7 sm:h-8 bg-gray-200 rounded-full flex justify-center items-center transition-all ease-in duration-300 '>
                                    <MdOutlineKeyboardArrowDown className={` text-lg sm:text-2xl cursor-pointer ${dacShowMod && "rotate-180"}`} />
                                </div>
                            </div>
                        </div>
                        <SegmentDetails dacShowMod={dacShowMod} />
                    </div>
                    <p className=' text-lg sm:text-2xl text-primary font-semibold pt-5 pb-0 sm:py-8'>Enter Traveler Details</p>
                    <form className=' w-full'>
                        <TravelerComponent />
                        <div className=' my-5'>
                            <button className='bg-primary py-2 px-3 w-full rounded-md font-semibold text-white hover:bg-white border-primary border hover:transition-all ease-in duration-700 hover:text-primary'>Continue</button>
                        </div>
                    </form>
                </div>
                <div className=' col-span-3 xl:col-span-1 '>
                    <div className=' w-full bg-white shadow-custom rounded overflow-hidden'>
                        <div className=' p-5 flex items-center'>
                            <img src={bg} alt="" className=' w-10' />
                            <p className=' ml-2'>Biman Bangladesh Airlines</p>
                        </div>
                        <div className=' relative'>
                            <span className=' block w-full h-[1px] bg-gray-300 my-3'></span>
                            <div onClick={togglFaresummery} className=' absolute -top-5 right-0 ml-5 w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center transition-all ease-in duration-300 '>
                                <MdOutlineKeyboardArrowDown className={` text-2xl cursor-pointer ${faresummery && "rotate-180"}`} />
                            </div>
                        </div>
                        <div className={` transition-all ease-in duration-300 ${faresummery ? " max-h-[400px]" : " max-h-0"}`}>
                            <div className=' px-5 py-3'>
                                <p className=' mb-3 font-medium'>Fare Summary</p>
                                <p className=' mb-1'>Adult ( 1 traveller)</p>
                                <div className=' flex justify-between'>
                                    <p className=' text-gray-500 text-sm'>Base Fare</p>
                                    <div className=' text-right'>
                                        <p className=' font-medium'> <span className=' text-gray-500 font-normal'>BDT</span> 2,645</p>
                                        <p className=' text-[12px]'>( 1 x 2,645 )</p>
                                    </div>
                                </div>
                                <div className=' flex justify-between mt-2'>
                                    <p className=' text-gray-500 text-sm'>Taxes + Fees</p>
                                    <div className=' text-right'>
                                        <p className=' font-medium'> <span className=' text-gray-500 font-normal'>BDT</span> 725</p>
                                        <p className=' text-[12px]'>( 1 x 725 )</p>
                                    </div>
                                </div>
                            </div>
                            <span className=' block w-full h-[1px] bg-gray-300 my-3'></span>
                            <div className=' w-full flex justify-between px-5 pb-3'>
                                <span className=' text-gray-500'>Sub-total</span>
                                <p><span className=' text-gray-500'>BDT</span> 2,3370</p>
                            </div>
                            <div className=' w-full bg-red-100 py-5 px-5 flex justify-between'>
                                <p className=' font-medium'>You Pay <span className=' text-gray-500 font-normal'>(for 1 traveler)</span></p>
                                <p className=' font-medium'>BDT 3,370</p>
                            </div>
                        </div>
                    </div>
                    <div className=' mt-5 bg-white shadow rounded '>
                        <TimeoutComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingDetails