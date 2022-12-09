import React, { useEffect } from 'react'
import { useState } from 'react'

function FilterSelectItem() {
    const [selectted, setSelected] = useState(false)
    const toggleSelect = () => {
        setSelected(!selectted)
    }

    return (
        <div className=' flex items-center cursor-pointer filterItem ' onClick={(e) => { toggleSelect() }}>
            <div className={` ${selectted ? "bg-primary border-primary " : "border-gray-500"} mr-2 w-4 h-4 bg-white border-[2px] rounded filterItem`}>
            </div>
            <p className=' text-gray-500 filterItem' id='filterItem'>Biman Bangladesh Airlines</p>
        </div>
    )
}

export default FilterSelectItem