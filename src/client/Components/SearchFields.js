import React, { useEffect } from 'react'
import { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai"

function SearchFields({ changeFlightData, option, initialData, flightFrom, flightTo }) {
    const [flieght, setFlight] = useState([])

    useEffect(() => {
        if (option === "from") {
            setFlight(initialData.filter((data) => data.iata !== flightFrom.iata && data.iata !== flightTo.iata))
        } else {
            setFlight(initialData.filter((data) => data.iata !== flightTo.iata && data.iata !== flightFrom.iata))
        }
        const inputfield = document.getElementById("input");
        inputfield.focus()
    }, [flightFrom, flightTo])

    const changeFlightDatas = (value) => {
        value.toLowerCase()
        if (value) {
            let flieghts = initialData.filter((flieght) => flieght.name.toLowerCase().search(value) > -1)
            setFlight(flieghts)
        } else {
            setFlight(initialData.slice(0, 9))
        }
    }

    return (
        <div className=' z-10 absolute top-full left-0 h-96 w-[280px] sm:w-72 bg-white shadow-lg rounded overflow-y-scroll scrollbar' id='search-fields'>
            <div className=' flex items-center p-2 sticky bg-white shadow-sm top-0 left-0'>
                <AiOutlineSearch className=' mr-1 text-red-500' />
                <input id='input' type="text" placeholder='Type for airport name or airport code' className=' py-1 pl-2 focus:outline-none placeholder:text-[12px] w-full' onChange={(e) => { changeFlightDatas(e.target.value) }} />
            </div>
            <div className=' mt-1'>
                {
                    flieght.map((air, index) =>
                        <div onClick={() => { changeFlightData(air, option) }} className=' search-item flex justify-between mb-2 hover:bg-gray-100 px-2' key={index}>
                            <div className='search-item'>
                                <p className=' text-[13px] font-medium search-item'>{air.city}</p>
                                <p className=' text-[11px] text-gray-500 search-item'>{air.name}</p>
                            </div>
                            <div className='search-item'>
                                <p className=' text-gray-500 font-medium text-[12px] search-item'>{air.iata}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div >
    )
}

export default SearchFields