import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import BookingClass from './BookingClass';
import CalenderComponent from './CalenderComponent';
import SearchFields from './SearchFields';
import { useDispatch } from 'react-redux';
import getDate from "../../utils/getDate"

function SearchComponent({ Home }) {
    const [searchOption, setSearchOption] = useState("");
    const [clickedSearchOption, setClickedSearchOption] = useState(false);
    const [clickedDateOption, setClickedDateOption] = useState(false);
    const [clickedClassOption, setClickedClassOption] = useState(false);
    const [initialData, setInitialData] = useState([
        {
            iata: "DAC",
            city: "Dhaka",
            name: "Hajrat Shahajalal Indernational Airport"
        },
        {
            iata: "CXB",
            city: "Coxs Bager",
            name: "Coxs Bager Airport"
        },
        {
            iata: "SHD",
            city: "Shaidpur Bangladesh",
            name: "Shaidpur"
        },
        {
            iata: "RAJ",
            city: "Rajshahi Bangladesh",
            name: "Rajshahi"
        },
        {
            iata: "BZL",
            city: "Borishal Bangladesh",
            name: "Borishal"
        },
    ])
    // console.log(initialData)
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const [travelers, setTravelers] = useState({
        adults: 1,
        children: 0,
        infant: 0
    })
    const [totalTraveler, setTotalTraveler] = useState(1)
    const [flightFrom, setFilghtFrom] = useState({
        iata: "DAC",
        city: "Dhaka",
        name: "Hajrat Shahajalal Indernational Airport"
    }
    )
    const [flightTo, setFlightTo] = useState(
        {
            iata: "BZL",
            city: "Borishal Bangladesh",
            name: "Borishal"
        }
    )
    const [depatureData, setDepatureData] = useState({})


    const toggleSearchOption = (option, e) => {
        setSearchOption(option);
        setClickedSearchOption(true);
        if (e.target.className.includes("search-item")) {
            setClickedSearchOption(false)
            setSearchOption("")
        }
    }
    const toggleClassOption = (e) => {
        if (e.target.id === "Close") {
            setClickedClassOption(false)
        } else {
            setClickedClassOption(true)
        }
    }
    document.addEventListener('mouseup', function (e) {
        if (clickedSearchOption) {
            let searchFields = document.getElementById("search-fields")
            if (!searchFields?.contains(e.target)) {
                setClickedSearchOption(false)
            }
        }
        if (clickedDateOption) {
            let calander = document.getElementById("calander")
            if (!calander?.contains(e.target)) {
                setClickedDateOption(false)
            }
        }
        if (clickedClassOption) {
            let bookingClass = document.getElementById("bookingClass")
            if (!bookingClass?.contains(e.target)) {
                setClickedClassOption(false)
            }
        }
    });

    const changeFlightData = (data, option) => {
        if (option === "from") {
            setFilghtFrom(data)
        } else {
            setFlightTo(data)
        }
    }
    const changeDateOption = (data, option) => {
        if (option === "Depature") {
            setDepatureData(data)
        }
    }

    const showCalander = () => {
        const calander = document.getElementById("calander")
        calander.showPicker()
    }

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    const searchFlight = () => {
        // const searchData = {
        //     adults: travelers.adults,
        //     children: travelers.children,
        //     infants: travelers.infant,
        //     originLocationCode: flightFrom.iata,
        //     destinationLocationCode: flightTo.iata,
        //     departureDate: formatDate(depatureData.date),
        // }
        // if (Home) {
        navigation("/booking-list")
        // } else {
        // setSerchData(searchData)
        // clearFilter()
        // }
    }

    useEffect(() => {
        let total = 0
        for (let traveler in travelers) {
            total = total + travelers[traveler]
        }
        setTotalTraveler(total)
    }, [travelers])

    useEffect(() => {
        setDepatureData(getDate(new Date()))
    }, [])


    return (
        <div className=' w-full shadow-custom bg-white rounded-xl p-5 pb-10'>
            <div className=' pt-3 grid grid-cols-1 xl:grid-cols-4 gap-2 relative'>
                <div onClick={(e) => { toggleSearchOption("from", e) }} className={` border rounded-lg p-2 text-left cursor-pointer relative ${searchOption === "from" && " bg-gray-100"}`}>
                    <p className=" text-gray-500 text-sm">From</p>
                    <p className=' font-semibold text-lg mb-1 text-gray-500'>{flightFrom.city}</p>
                    <p className=' text-gray-500 text-[12px]'>{flightFrom.name}</p>
                    {
                        clickedSearchOption && searchOption === "from" &&
                        <SearchFields initialData={initialData} flightFrom={flightFrom} flightTo={flightTo} changeFlightData={changeFlightData} option="from" />
                    }
                </div>
                <div onClick={(e) => { toggleSearchOption("to", e) }} className={` border rounded-lg p-2 text-left cursor-pointer relative ${searchOption === "to" && " bg-gray-100"}`}>
                    <p className=" text-gray-500 text-sm">To</p>
                    <p className=' font-semibold text-lg mb-1 text-gray-500'>{flightTo.city}</p>
                    <p className=' text-gray-500 text-[12px]'>{flightTo.name}</p>
                    {
                        clickedSearchOption && searchOption === "to" &&
                        <SearchFields initialData={initialData} flightFrom={flightFrom} flightTo={flightTo} changeFlightData={changeFlightData} option="to" />
                    }
                </div>
                <div onClick={() => { showCalander(); toggleSearchOption("depature") }} className={` text-left p-3 border rounded-lg relative ${searchOption === "depature" && "bg-gray-100"}`}>
                    <p className=" text-gray-500 text-sm">Depature</p>
                    <p className=' font-semibold text-lg mb-1 text-gray-500'>{depatureData.date}</p>
                    <p className=' text-gray-500 text-[12px]'>{depatureData.day}</p>
                    <CalenderComponent option="Depature" changeDateOption={changeDateOption} />
                </div>
                <div onClick={(e) => { toggleClassOption(e); toggleSearchOption("traveler") }} className={` border rounded-lg p-2 text-left cursor-pointer relative ${searchOption === "traveler" && "bg-gray-100"}`}>
                    <p className=" text-gray-500 text-sm">Traveler and Booking Class</p>
                    <p className=' font-semibold text-lg mb-1 text-gray-500'>{totalTraveler} Traveler</p>
                    <p className=' text-gray-500 text-[12px]'>Economy</p>
                    {
                        clickedClassOption &&
                        <BookingClass travelers={travelers} setTravelers={setTravelers} />
                    }
                </div>
                <div className=' flex justify-center w-full'>
                    <button onClick={searchFlight} className=' w-full xl:w-auto z-1 xl:absolute -bottom-14 left-1/2 xl:-translate-x-1/2 shadow py-3 px-10 bg-primary text-white font-medium rounded-md'>{Home ? "Search" : "Modify"}</button>
                </div>
            </div>
        </div>
    )
}

export default SearchComponent