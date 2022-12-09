import React from 'react'

function FlightFear() {
    return (
        <div className=' mt-3 w-full border'>
            <div className=' w-full py-1 sm:py-2 px-1 sm:px-2 border-b'>
                <p className=' font-medium'>Fare breakdown</p>
            </div>
            <div className=' p-0 sm:p-5'>
                <table className=' border w-full'>
                    <tbody>
                        <tr className=' text-gray-500 font-medium text-[9px] sm:text-[12px]'>
                            <td className=' p-[1px] sm:p-2 border'>Fare Summery</td>
                            <td className=' p-[1px] sm:p-2 border'>Base Fare</td>
                            <td className=' p-[1px] sm:p-2 border'>Text + Fees</td>
                            <td className=' p-[1px] sm:p-2 border'>Per Pesenger</td>
                            <td className=' p-[1px] sm:p-2 border'>Total</td>
                        </tr>
                        <tr className=' text-gray-500 text-[9px] sm:text-[12px] hover:bg-gray-100'>
                            <td className=' p-[1px] sm:p-2 border'>Adult</td>
                            <td className=' p-[1px] sm:p-2 border'>BDT 2,790</td>
                            <td className=' p-[1px] sm:p-2 border'>BDT 790</td>
                            <td className=' p-[1px] sm:p-2 border'>BDT (3,456 x 1)</td>
                            <td className=' p-[1px] sm:p-2 border'>BDT 3,456</td>
                        </tr>
                        <tr className=' text-gray-500 font-medium text-[9px] sm:text-[12px] hover:bg-gray-100'>
                            <td className=' p-[1px] sm:p-2 border'>Total (1 Traveler)</td>
                            <td className=' p-[1px] sm:p-2 border'></td>
                            <td className=' p-[1px] sm:p-2 border'></td>
                            <td className=' p-[1px] sm:p-2 border'></td>
                            <td className=' p-[1px] sm:p-2 border'>BDT 3,370</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default FlightFear