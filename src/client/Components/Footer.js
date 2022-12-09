import React from 'react'
import logo from "../Photos/logo.svg"
import { FaFacebookF } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { SiTwitter } from "react-icons/si"
import { FaLinkedinIn } from "react-icons/fa"
import bankphoto from "../Photos/bank.png"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className=' w-full py-5 sm:py-10'>
            <div className=' grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 px-5 sm:px-16 md:px-20 lg:px-32'>
                {/* px-5 sm:px-16 md:px-20 lg:px-32 xl:px-40 2xl:px-64 */}
                <div className=' my-1 lg:my-0'>
                    <Link to="/">
                        <img src={logo} alt="" className=' w-40' />
                    </Link>
                    <p className=' text-primary  text-sm my-5 leading-7'>Flight Expert Dhaka (Main branch) 90/1 Motijheel City Centre Level 25-B-1, Lift 26 Dhaka 1000, Bangladesh</p>
                    <div className=' flex mt-4'>
                        <FaFacebookF className='mr-2 text-primary text-xl' />
                        <FiInstagram className=' mx-2 text-primary text-xl' />
                        <SiTwitter className=' mx-2 text-primary text-xl' />
                        <FaLinkedinIn className=' mx-2 text-primary text-xl' />
                    </div>
                </div>
                <div className=' my-1 lg:my-0'>
                    <p className=' text-base sm:text-lg font-semibold text-gray-600 mb-2'>About</p>
                    <p className=' text-gray-400 text-sm sm:text-base my-1 hover:text-primary cursor-pointer'>About Flight Expert</p>
                    <p className=' text-gray-400 text-sm sm:text-base my-1 hover:text-primary cursor-pointer'>Best Price Guarantee</p>
                    <p className=' text-gray-400 text-sm sm:text-base my-1 hover:text-primary cursor-pointer'>Terms and Conditions</p>
                    <p className=' text-gray-400 text-sm sm:text-base my-1 hover:text-primary cursor-pointer'>Privacy Policy</p>
                    <p className=' text-gray-400 text-sm sm:text-base my-1 hover:text-primary cursor-pointer'>Cookie Policy</p>
                    <p className=' text-gray-400 text-sm sm:text-base my-1 hover:text-primary cursor-pointer'>Blog</p>
                </div>
                <div className=' my-1 lg:my-0'>
                    <p className=' text-base sm:text-lg font-semibold text-gray-600 mb-2'>Help</p>
                    <p className=' text-gray-400 text-sm sm:text-base my-1 hover:text-primary cursor-pointer'>FAQS</p>
                    <p className=' text-gray-400 text-sm sm:text-base my-1 hover:text-primary cursor-pointer'>Easy EMI</p>
                    <p className=' text-gray-400 text-sm sm:text-base my-1 hover:text-primary cursor-pointer'>Payment Methods</p>
                    <p className=' text-gray-400 text-sm sm:text-base my-1 hover:text-primary cursor-pointer'>Contact Us</p>
                </div>
                <div className=' my-1 lg:my-0'>
                    <p className=' text-base sm:text-lg font-semibold text-gray-600 mb-2'>Have Questions?</p>
                    <p className='my-1 text-sm sm:text-base text-primary font-medium'>+88-09678-744223</p>
                    <p className='my-1 text-sm sm:text-base text-primary font-medium'>sales@flightexpert.com</p>
                    <p className=' font-medium text-sm my-1 '>Dedicated Customer Support</p>
                    <p className=' text-[12px] my-1'>Sat-Thurs: 9AM-9PM</p>
                    <p className=' text-[12px]'>Friday/Govt. Holidays: 10AM-6PM</p>
                </div>
                <div className=' my-1 lg:my-0'>
                    <p className=' text-base sm:text-lg font-semibold text-gray-600 mb-2'>Accepted Payments</p>
                    <img src={bankphoto} alt="" className=' w-64' />
                </div>
            </div>
            <span className=' block w-full h-[1px] bg-gray-300 my-3 sm:my-10'></span>
            <p className=' text-center font-medium text-gray-600 mt-3 sm:mt-10 px-5 text-[12px] sm:text-base'>Copyright @2022 FEBD Ltd. All rights reserved by Flight Expert</p>
        </div>
    )
}

export default Footer