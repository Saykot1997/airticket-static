import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bg from "../Photos/BG.png"
import FlightDetails from './FlightDetails'
import FlightFear from './FlightFear'
import FlightRules from './FlightRules'


function BookComponent() {
    const [showDetails, setShowDetails] = useState(false)
    const [activeButton, setAcctiveButton] = useState("flight-details")

    const navigation = useNavigate()


    const toggleShowDetails = () => {
        setShowDetails(!showDetails)
    }
    const toggleActiveButton = (text) => {
        setAcctiveButton(text)
    }
    const gotoDetailsPage = () => {
        navigation("/booking-details")
    }

    return (
        <div className=' w-full bg-white shadow-custom rounded-md mt-5 z-1 p-5'>
            <div className='w-full flex justify-between flex-wrap '>
                <div className='  mb-5 sm:mx-1 sm:mb-4 lg:mb-3 w-full sm:w-auto'>
                    <img src={bg} alt="" className=' w-20' />
                    <p className=' text-gray-400 text-[12px] font-medium mt-1'>Biman Bangladesh Airlines</p>
                </div>
                <div className=' mb-5 sm:mx-1 sm:mb-4 lg:mb-3'>
                    <p className=' text-gray-400 text-[12px]'>Depart</p>
                    <p className=' mt-1 font-medium'>15:45</p>
                    <p className=' text-[12px] leading-4'>Wed, 16 Nov 2022</p>
                    <p className=' text-sm mt-[6px]'>Dhaka</p>
                </div>
                <div className=' flex flex-col justify-start items-start sm:items-center  mb-5 sm:mx-1 sm:mb-4 lg:mb-3 pr-4'>
                    <p className=' text-gray-400 text-[12px]'>2 day 2 hours 0 minutes</p>
                    <div className=' relative w-20 sm:w-28 h-[1px] bg-primary mt-2 sm:mt-5 sm:mx-1'>
                        <span className=' absolute w-3 h-[1px] inline-block bg-primary -top-1 -right-[2px] rotate-45'></span>
                    </div>
                    <p className=' text-[12px] mt-1 sm:mt-3'>2 stop via Abu Dhabi & Melbourne</p>
                </div>
                <div className=' mb-5 sm:mx-1 sm:mb-4 lg:mb-3'>
                    <p className=' text-gray-400 text-[12px]'>Arrive</p>
                    <p className=' mt-1 font-medium'>16:5</p>
                    <p className=' text-[12px] leading-4'>Thursday, 17 Nov 22</p>
                    <p className=' text-sm mt-[6px]'>Sydney</p>
                </div>
                <div className=' mb-5 sm:mx-1 sm:mb-4 lg:mb-3'>
                    <p className=' text-gray-400 text-[12px]'>Price</p>
                    <p className=' mt-1 font-medium'>BDT 141,605</p>
                </div>
                <div className='  mb-5 sm:mx-1 sm:mb-4 lg:mb-3'>
                    <button onClick={gotoDetailsPage} className=' bg-primary py-2 px-3 rounded text-white font-semibold hover:bg-white hover:border-primary border transition-all ease-in duration-300 hover:text-primary'>Book Now</button>
                </div>
            </div>
            <div className=' w-full flex items-center justify-between'>
                <p className=' text-green-700 text-[12px] font-medium'>Partially Refundable</p>
                <p onClick={toggleShowDetails} className=' text-primary text-[12px] sm:text-sm cursor-pointer hover:text-red-900'>{showDetails ? "Hide Flight Details" : "View Flight Details"}</p>
            </div>
            <div className={` w-full pt-5 ${showDetails ? "max-h-[1200px]" : "max-h-0"} overflow-hidden transition-all ease-in-out duration-500`}>
                <span className=' block w-full h-[1px] bg-gray-300 '></span>
                <div className=' flex my-4'>
                    <button onClick={() => toggleActiveButton("flight-details")} className={`" p-1 px-2 text-[12px] mr-1 rounded  shadow mr-1" ${activeButton === "flight-details" ? " bg-primary text-white" : "bg-gray-100"}`}>Flight Details</button>
                    <button onClick={() => toggleActiveButton("flight-summery")} className={`" p-1 px-2 text-[12px] mx-1 rounded  shadow mr-1" ${activeButton === "flight-summery" ? " bg-primary text-white" : "bg-gray-100"}`}>Fare Summery</button>
                    <button onClick={() => toggleActiveButton("flight-rules")} className={`" p-1 px-2 text-[12px] mx-1 rounded  shadow mr-1" ${activeButton === "flight-rules" ? " bg-primary text-white" : "bg-gray-100"}`}>Fare Rules</button>
                </div>
                {
                    activeButton === "flight-details" &&
                    <FlightDetails />
                }
                {
                    activeButton === "flight-summery" &&
                    <FlightFear />
                }
                {
                    activeButton === "flight-rules" &&
                    <FlightRules />
                }
            </div>
        </div>
    )
}

export default BookComponent