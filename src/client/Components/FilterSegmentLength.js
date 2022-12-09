import React from 'react'
import { useState } from 'react'

function FilterSegmentLength({ l }) {
    const [selectted, setSelected] = useState(false)
    const toggleSelect = () => {
        setSelected(!selectted)
    }

    return (
        <div className=' flex items-center cursor-pointer filterLengthItem ' onClick={(e) => { toggleSelect() }}>
            <div className={` ${selectted ? "bg-primary border-primary " : "border-gray-500"} mr-2 w-4 h-4 bg-white border-[2px] rounded filterLengthItem`}>
            </div>
            <p className=' text-gray-500 filterLengthItem' id='filterLengthItem'>{l} Stop</p>
        </div>
    )
}

export default FilterSegmentLength