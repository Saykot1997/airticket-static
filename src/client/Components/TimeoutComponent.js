import React from 'react'

function TimeoutComponent() {
    return (
        <div className=' w-full p-5'>
            <p className=' text-center font-medium'>Session Timeout in</p>
            <div className=' flex justify-center mt-5 items-center'>
                <div className=' bg-primary text-lg text-white font-bold py-2 px-4 rounded'>
                    10
                </div>
                <span className=' mx-2 font-bold text-lg text-primary'>:</span>
                <div className=' bg-primary text-lg text-white font-bold py-2 px-4 rounded'>
                    10
                </div>
            </div>
            <div className=' flex justify-center mt-1 items-center'>
                <div>
                    <span className=' mr-5'>min</span>
                    <span className=' ml-5'>sec</span>
                </div>
            </div>
        </div>
    )
}

export default TimeoutComponent