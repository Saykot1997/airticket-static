import React from 'react'
import { AiOutlineMinus } from 'react-icons/ai'
import { BsPlusLg } from "react-icons/bs"

function BookingClass({ travelers, setTravelers }) {

    const incrementTravelers = (option) => {
        if (option === "adults") {
            setTravelers({ ...travelers, adults: travelers.adults + 1 })
        } else if (option === "children") {
            setTravelers({ ...travelers, children: travelers.children + 1 })
        } else if (option === "infant") {
            setTravelers({ ...travelers, infant: travelers.infant + 1 })
        }
    }
    const dicrimentTravelers = (option) => {
        if (option === "adults") {
            if (travelers.adults >= 1) {
                setTravelers({ ...travelers, adults: travelers.adults - 1 })
            }
        } else if (option === "children") {
            if (travelers.children >= 1) {
                setTravelers({ ...travelers, children: travelers.children - 1 })
            }
        } else if (option === "infant") {
            if (travelers.infant >= 1) {
                setTravelers({ ...travelers, infant: travelers.infant - 1 })
            }
        }
    }


    return (
        <div className=' z-10 absolute top-full left-0  h-[240px] p-2 w-56 sm:w-72 bg-white shadow-lg rounded-md shadow-gray-600' id='bookingClass'>
            <p className=' text-primary text-sm font-medium'>Travelers</p>
            <div className=' mb-1'>
                <div className=' flex items-center justify-between'>
                    <p className=' font-medium text-gray-500'>Adults</p>
                    <div className=' flex items-center'>
                        <div onClick={() => dicrimentTravelers("adults")} className=' bg-gray-50 p-2 flex justify-center items-center rounded mr-2'>
                            <AiOutlineMinus className=' text-primary' />
                        </div>
                        <span className=' text-lg'>{travelers.adults}</span>
                        <div onClick={() => incrementTravelers("adults")} className=' bg-gray-50 flex justify-center items-center p-2 rounded ml-2'>
                            <BsPlusLg className=' text-primary' />
                        </div>
                    </div>
                </div>
                <p className=' text-[10px] text-gray-500 -mt-[2px]'>12 Years+</p>
            </div>
            <div className=' mb-1'>
                <div className=' flex items-center justify-between'>
                    <p className=' font-medium text-gray-500'>Children</p>
                    <div className=' flex items-center'>
                        <div onClick={() => dicrimentTravelers("children")} className=' bg-gray-50 p-2 flex justify-center items-center rounded mr-2'>
                            <AiOutlineMinus className=' text-primary' />
                        </div>
                        <span className=' text-lg'>{travelers.children}</span>
                        <div onClick={() => incrementTravelers("children")} className=' bg-gray-50 flex justify-center items-center p-2 rounded ml-2'>
                            <BsPlusLg className=' text-primary' />
                        </div>
                    </div>
                </div>
                <p className=' text-[10px] text-gray-500 -mt-[2px]'>2-12 Years</p>
            </div>
            <div className=' mb-1'>
                <div className=' flex items-center justify-between'>
                    <p className=' font-medium text-gray-500'>Infant</p>
                    <div className=' flex items-center'>
                        <div onClick={() => dicrimentTravelers("infant")} className=' bg-gray-50 p-2 flex justify-center items-center rounded mr-2'>
                            <AiOutlineMinus className=' text-primary' />
                        </div>
                        <span className=' text-lg'>{travelers.infant}</span>
                        <div onClick={() => incrementTravelers("infant")} className=' bg-gray-50 flex justify-center items-center p-2 rounded ml-2'>
                            <BsPlusLg className=' text-primary' />
                        </div>
                    </div>
                </div>
                <p className=' text-[10px] text-gray-500 -mt-[2px]'>below 2 Years</p>
            </div>
            <div className=' w-full flex justify-end mt-3'>
                <button id='Close' className='hover:bg-primary py-1 px-[6px] rounded hover:text-white bg-white border-primary border hover:transition-all hover:ease-in hover:duration-300 text-primary'>Done</button>
            </div>
        </div>
    )
}

export default BookingClass