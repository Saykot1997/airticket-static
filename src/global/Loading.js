import React from 'react'
import ClockLoader from "react-spinners/ClockLoader"

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#fff",
};

function Loading() {
    return (
        <div className={` w-screen h-screen bg-red-600 fixed top-0 left-0 z-50`}>
            <div className=' w-full h-full flex justify-center items-center'>
                <ClockLoader
                    color="#fff"
                    cssOverride={override}
                    loading
                    size={60}
                />
            </div>
        </div>
    )
}

export default Loading