import React from 'react'
import bg from "../Photos/BG.png"

function SegmentDetails({ dacShowMod }) {
    return (
        <div className={` w-full overflow-y-hidden transition-all ease-in duration-300 ${dacShowMod ? " max-h-[500px]" : " max-h-0"} `}>
            <span className=' block w-full h-[1px] bg-gray-300 my-2 '></span>
            <div className=' p-1 sm:p-5 flex justify-between items-center'>
                <div className=' flex items-center'>
                    <div>
                        <img src={bg} alt="" className=' w-14' />
                    </div>
                    <div className=' ml-3'>
                        <p className=' text-[10px] sm:text-[12px] text-gray-500'>DAC-CGP</p>
                        <p className=' text-[12px] sm:text-sm mt-2'>BG | 615</p>
                        <div className=' flex items-center flex-wrap'>
                            <p className=' text-[12px] sm:text-sm font-medium w-full sm:w-auto'>Aircraft :  Boeing 737-800</p> <p className=' sm:ml-3 ml-0 text-[12px] sm:text-sm font-medium'>Operated by : BG</p>
                        </div>
                    </div>
                </div>
            </div>
            <span className=' block w-full h-[1px] bg-gray-300 my-2 '></span>
            <div className=' p-3 sm:p-5 flex justify-between items-center flex-wrap'>
                <div className=' w-full sm:w-auto'>
                    <p className=' text-gray-500 text-[11px]'>Depart</p>
                    <p className=' mt-2'>15:45</p>
                    <p className=' text-gray-700 text-[12px] font-semibold'>Wed, 16 Nov 2022</p>
                    <p className=' mt-2 text-sm font-semibold'>(DAC)</p>
                    <p className=' text-sm'>Dhaka</p>
                </div>

                <div className=' flex flex-col items-center pr-2 w-fulll sm:w-auto sm:my-0 my-3'>
                    <p className=' text-gray-400 text-[12px]'>45 minutes</p>
                    <div className=' relative w-20 sm:w-32 h-[1px] bg-primary mt-3'>
                        <span className=' absolute w-3 h-[1px] inline-block bg-primary -top-1 -right-[2px] rotate-45'></span>
                    </div>
                    <p className=' text-[12px] mt-1'>No stop</p>
                </div>

                <div className=' w-full sm:w-auto'>
                    <p className=' text-gray-500 text-[11px]'>Arrive</p>
                    <p className=' mt-2'>16:30</p>
                    <p className=' text-gray-700 text-[12px] font-semibold'>Wed, 16 Nov 2022</p>
                    <p className=' mt-2 text-sm font-semibold'>(CGP)</p>
                    <p className=' text-sm'>Chittagong</p>
                </div>
            </div>
        </div>
    )
}

export default SegmentDetails