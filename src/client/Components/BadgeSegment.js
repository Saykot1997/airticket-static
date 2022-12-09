import React from 'react'
import bg from "../Photos/BG.png"

function BadgeSegment() {


    return (
        <div>
            <div className=' mt-2'>
                <p className=' font-medium text-sm'>Dhaka, to Colombo, 16 Nov 22</p>
            </div>
            <div className=' border p-1 w-full mt-3'>
                <div className='flex'>
                    <div>
                        <img src={bg} className=" w-20" alt="" />
                    </div>
                    <div>
                        <p className=' font-medium text-sm'>SRILANKAN <span className=' font-normal'>AIRLINESUL | 190</span></p>
                        <p className=' text-[12px] font-medium'>Aircraft: AIRBUS A320 (SHARKLETS)8</p>
                        <p className=' text-[10px] font-medium'>Operated by : UL</p>
                    </div>
                </div>
                <table className=' w-full mt-3'>
                    <tr>
                        <td className=' font-medium text-sm'>Baggage</td>
                        <td className=' font-medium text-sm'>Check In</td>
                    </tr>
                    <tr>
                        <td className='text-[12px] text-gray-400'>ADULT</td>
                        <td className='text-[12px] text-gray-400'>30 KG(s)</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default BadgeSegment