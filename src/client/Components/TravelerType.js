import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function TravelerType({ types }) {

    const [travelersTypeKey, setTravelersTypeKey] = useState([])
    const [travelersTypeValues, setTravelersTypeValues] = useState([])
    const [travelerTypes, setTravelersType] = useState({})

    useEffect(() => {
        let allTypes = {}
        for (let i of types) {
            if (!allTypes[i.travelerType]) {
                allTypes[i.travelerType] = 1
            } else {
                allTypes[i.travelerType] = allTypes[i.travelerType] + 1
            }
        }
        setTravelersTypeKey(Object.keys(allTypes))
        setTravelersTypeValues(Object.values(allTypes))
        setTravelersType(allTypes)
    }, [types])


    return (
        <div>
            {
                travelersTypeKey.map((key, ind) => {
                    return (
                        <p className=' text-[12px] text-gray-500' key={ind}>
                            {
                                travelersTypeValues[ind] === 1 &&
                                <span>{key}</span>
                            }
                            {
                                travelersTypeValues[ind] > 1 &&
                                <span>{key} ({travelerTypes[key]})</span>
                            }
                        </p>

                    )
                })
            }
        </div>
    )
}

export default TravelerType