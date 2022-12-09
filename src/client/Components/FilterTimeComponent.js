import React from 'react'
import { useState } from 'react'
import { MdOutlineLightMode, MdWbTwilight } from 'react-icons/md'

function FilterTimeComponent() {
    const [selectted, setSelected] = useState([])

    const toggleSelect = (name) => {
        if (selectted.includes(name)) {
            setSelected(selectted.filter((s) => s !== name))
        } else {
            setSelected([...selectted, name])
        }
    }


    return (
        <div className=' flex justify-center'>
            <div className=' grid grid-cols-1 sm:grid-cols-2 gap-2'>
                {/* {
                    minDate < 12 && */}
                <div div className={` rounded p-2 pt-3 w-32 text-center shadow cursor-pointer ${selectted.includes("morning") ? " bg-primary text-white" : " border border-gray-900"}`} onClick={(e) => { toggleSelect("morning") }}>
                    <div className=' flex justify-center'>
                        <MdOutlineLightMode className=' text-lg mb-1' />
                    </div>
                    <p className=' text-[12px] font-medium'>Morning</p>
                    <p className={` text-[12px] ${selectted.includes("morning") ? "text-white" : "text-gray-600"} `}>00:00 - 11:59 (9)</p>
                </div>
                {/* }
                {
                    minDate < 18 && */}
                <div className={` rounded p-2 pt-3 w-32 text-center shadow cursor-pointer ${selectted.includes("after-noon") ? " bg-primary text-white" : " border border-gray-900"}`} onClick={(e) => { toggleSelect("after-noon") }}>
                    <div className=' flex justify-center'>
                        <MdOutlineLightMode className=' text-lg mb-1' />
                    </div>
                    <p className=' text-[12px] font-medium'>After Noon</p>
                    <p className={` text-[12px] ${selectted.includes("after-noon") ? "text-white" : "text-gray-600"} `}>12:00 - 17:59 (9)</p>
                </div>
                {/* }
                {
                    maxDate > 18 && */}
                <div className={` rounded p-2 pt-3 w-32 text-center shadow cursor-pointer ${selectted.includes("evening") ? " bg-primary text-white" : " border border-gray-900"}`} onClick={(e) => { toggleSelect("evening") }}>
                    <div className=' flex justify-center'>
                        <MdWbTwilight className=' text-xl' />
                    </div>
                    <p className=' text-[12px] font-medium'>Evening</p>
                    <p className={` text-[12px] ${selectted.includes("evening") ? "text-white" : "text-gray-600"} `}>18:00 - 23:59 (11)</p>
                </div>
                {/* } */}

            </div>
        </div>
    )
}

export default FilterTimeComponent