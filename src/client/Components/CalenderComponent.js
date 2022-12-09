import React, { useState } from 'react'
import { useEffect } from 'react';
import getDate from '../../utils/getDate';


function CalenderComponent({ changeDateOption, option }) {
    const [min, setMin] = useState("");
    useEffect(() => {
        // Create a date object from a date string
        var date = new Date();
        // Get year, month, and day part from the date
        var year = date.toLocaleString("default", { year: "numeric" });
        var month = date.toLocaleString("default", { month: "2-digit" });
        var day = date.toLocaleString("default", { day: "2-digit" });
        setMin(`${year}-${month}-${day}`)
        // console.log(`${year}-${month}-${day}`)
    }, [])

    return (
        <div className=' flex justify-center sm:justify-start'>
            <input type="date" id="calander" onChange={(e) => changeDateOption(getDate(e.target.value), option)} min={min} className="w-92 max-h-0 opacity-0 text-gray-500 py-1 focus:outline-none focus:ring-1 rounded-md" />
        </div>
    )
}

export default CalenderComponent