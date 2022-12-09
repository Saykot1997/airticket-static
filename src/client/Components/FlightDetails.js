import React from 'react'
import FlightSegment from './FlightSegment'

function FlightDetails() {
    return (
        <div className=' mt-3 w-full border'>
            <div className=' w-full p-1 sm:p-2 border-b'>
                <p className=' font-medium'>Dhaka to Sydney, 25 Nov 2022</p>
            </div>
            <div>
                <FlightSegment />
                <div className=' w-full flex justify-center py-5'>
                    <div className=' flex items-center justify-center w-[320px] bg-red-50 rounded p-1 text-sm font-medium text-red-500 px-5'>
                        <span className=' mr-1'>--------</span>
                        <span>7 hours 5 minutes</span>
                        <span className=' ml-1'>--------</span>
                    </div>
                </div>
                <FlightSegment />
                <div className=' w-full flex justify-center py-5'>
                    <div className=' flex items-center justify-center w-[320px] bg-red-50 rounded p-1 text-sm font-medium text-red-500 px-5'>
                        <span className=' mr-1'>--------</span>
                        <span>7 hours 5 minutes</span>
                        <span className=' ml-1'>--------</span>
                    </div>
                </div>
                <FlightSegment />
            </div>
        </div>
    )
}

export default FlightDetails