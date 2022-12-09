import React from 'react'
import SearchComponent from '../Components/SearchComponent'
import fingerPhoto from "../Photos/hand-love.png"
import bgphoto from "../Photos/bg.webp"


function Home() {
    return (
        <div>
            {/* bg-hero-pattern bg-cover bg-center */}
            <div className='  w-full xl:h-[600px]  2xl:h-[580px] relative'>
                <div className=' w-full h-full absolute top-0 left-0 -z-10 flex items-center'>
                    <img src={bgphoto} alt="" className=' w-full' />
                </div>
                {/* xl:px-40 2xl:px-64 */}
                <div className=' px-5 sm:px-16 md:px-20 lg:px-32  text-center'>
                    <div className=' pt-8 flex justify-center'>
                        <p className=' font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-[82px] xl:leading-[85px] w-[600px] '>It’s more than just a trip</p>
                    </div>
                    <div className=' mt-10'>
                        <SearchComponent Home />
                    </div>
                </div>
            </div>
            {/* xl:px-40 2xl:px-64 */}
            <div className=' my-16 w-full px-5 sm:px-16 md:px-20 lg:px-32'>
                <div className=' w-full bg-primary rounded-lg flex justify-between flex-wrap'>
                    <div className=' w-full lg:w-1/2 text-white font-medium p-5 sm:p-16'>
                        <p className=' mb-2 text-sm sm:text-base font-medium'>Offering</p>
                        <p className=' text-3xl font-medium sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl'>BEST DEALS</p>
                        <p className=' mt-2 2xl:ml-64'>on flight booking</p>
                    </div>
                    <div className=' w-full lg:w-1/2 flex lg:justify-center sm:pl-10 lg:pl-0'>
                        <img src={fingerPhoto} alt="" className=' w-36 sm:w-40 lg:w-48 xl:w-60' />
                    </div>
                </div>
            </div>
            {/*  xl:px-40 2xl:px-64 */}
            <div className=' px-5 sm:px-16 md:px-20 lg:px-32 my-16 flex items-center'>
                <span className=' inline-block h-8 lg:h-10 w-[3px] bg-primary mr-3'></span>
                <p className='  font-semibold text-xl lg:text-3xl'>Explore unique <span className=' text-primary'>places to stay</span></p>
            </div>
            {/* xl:px-40 2xl:px-64 */}
            <div className=' px-5 sm:px-16 md:px-20 lg:px-32  w-full bg-primary py-10 sm:py-28 text-white'>
                <p className=' text-2xl sm:text-4xl font-medium'>Seamless travel made easy</p>
                <p className=' text-sm sm:text-base mt-5 xl:w-[450px]'>Book and manage flights on the go. Jet off on app-exclusive
                    fares. Enjoy unlimited access to digital content. Travel
                    seamlessly with the Global Immigration Consultant Limited..</p>
            </div>
        </div>

    )
}

export default Home