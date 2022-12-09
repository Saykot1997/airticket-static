import React from 'react'
import bg from "../Photos/BG.png"

function FlightSegment() {

    return (
        <div className=' p-1 sm:p-3'>
            <div className=' flex'>
                <div>
                    <img src={bg} alt="" className=' w-16' />
                </div>
                <div className=' ml-3'>
                    <p><span className=' text-sm sm:text-base font-medium'>Thai Airways</span> TG | 322</p>
                    <p className=' font-medium text-[11px] sm:text-[12px]'>Aircraft : Boeing 777-200</p>
                    <p className=' font-medium text-[11px] sm:text-[12px]'>Operated by : TG</p>
                    <p className=' font-medium text-[11px] sm:text-[12px]'>Economy (B)</p>
                    <p className=' font-medium text-[11px] sm:text-[12px]'>Available seats: 9</p>
                </div>
            </div>
            <div className=' flex justify-between flex-wrap mt-5'>
                <div className=' w-full sm:w-auto'>
                    <p className=' mb-1 sm:mb-2 font-medium'>13: 40</p>
                    <p className=' text-[12px] font-medium text-gray-500'>Fri, 25 Nov 2022</p>
                    <p className=' text-sm'>(DAC)</p>
                    <p className=' text-[12px] font-medium text-gray-500'>Terminal 2</p>
                    <p className=' text-[12px] font-medium text-gray-500'>Hazrat Shahjalal Int...</p>
                    <p className=' text-[12px] font-medium text-gray-500'>Dhaka, Bangladesh</p>
                </div>
                <div className=' text-[12px] w-full sm:w-auto flex flex-col items-center px-2 mt-3 sm:mt-0'>
                    <p className=' text-gray-500'>2 hours 55 minutes</p>
                    <span className=' block w-16 h-[1px] bg-primary my-3'></span>
                </div>
                <div className='  w-full sm:w-auto mb-3 sm:mb-0'>
                    <p className=' mb-1 sm:mb-2 font-medium'>17:0</p>
                    <p className=' text-[12px] font-medium text-gray-500'>Wednesday, 16 Nov 22</p>
                    <p className=' text-sm'>(CMB)</p>
                    <p className=' text-[12px] font-medium text-gray-500'>Terminal</p>
                    <p className=' text-[12px] font-medium text-gray-500'>Bandaranaike International Colombo Airport</p>
                    <p className=' text-[12px] font-medium text-gray-500'>Colombo, Sri Lanka</p>
                </div>
                <div className=''>
                    <p className='  text-[13px] sm:text-base mb-1 sm:mb-2 font-medium'>Baggage</p>
                    <p className=' text-sm'>Adult</p>
                </div>
                <div className=''>
                    <p className='  text-[13px] sm:text-base mb-1 sm:mb-2 font-medium'>Check In</p>
                    <p className=' text-[12px] text-gray-500'>35 Kg(s)</p>
                </div>
                <div className=''>
                    <p className=' text-[13px] sm:text-base mb-1 sm:mb-2 font-medium'>Cabin</p>
                    <p className=' text-[12px] text-gray-500'>7 Kg(s)</p>
                </div>
            </div>
        </div>
    )
}

export default FlightSegment