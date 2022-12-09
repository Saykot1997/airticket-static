import React, { useState } from 'react'
import { Range } from 'react-range';

function RangeComponent() {

    const [rengeValues, setRangeValues] = useState([500])
    const fixedRange = 500
    return (
        <div className=' px-5 py-2'>
            <p className=' font-medium'>One Way Price</p>
            <div className=' mt-5 mb-3'>
                <Range
                    step={0.1}
                    min={0}
                    max={1000}
                    values={rengeValues}
                    onChange={(values) => setRangeValues(values)}
                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '6px',
                                width: '100%',
                                backgroundColor: '#eb1933'
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '20px',
                                width: '20px',
                                borderRadius: '50%',
                                backgroundColor: '#eb1933',
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                outline: "none"
                            }}

                        >
                            <span className=' bg-white h-[12px] w-[12px] rounded-full'></span>
                        </div>
                    )}
                />
            </div>
            <div className=' flex font-medium'>
                <span>{fixedRange} tk - </span>
                <span>{rengeValues[0]} tk</span>
            </div>
        </div>
    )
}

export default RangeComponent