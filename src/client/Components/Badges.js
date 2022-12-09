import React from 'react'
import BadgeSegment from './BadgeSegment'

function Badges({ toggleShowBadges }) {

    return (
        <div className=' w-full h-screen bg-black bg-opacity-25 fixed top-0 left-0 flex items-center px-5 justify-center z-[1000]'>
            <div className=' w-full flex justify-center'>
                <div className=' w-[650px] h-[650px] overflow-y-scroll scrollbar p-5 rounded relative bg-white shadow-custom h'>
                    <span onClick={toggleShowBadges} className=" absolute top-2 right-5 cursor-pointer inline-block bg-primary p-1 rounded text-white px-4 text-lg">x</span>
                    <BadgeSegment toggleShowBadges={toggleShowBadges} />
                    <BadgeSegment toggleShowBadges={toggleShowBadges} />
                    <BadgeSegment toggleShowBadges={toggleShowBadges} />
                </div>
            </div>
        </div>
    )
}

export default Badges