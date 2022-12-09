import React from 'react'
import { countries } from "../../country"

function TravelerComponent() {

    return (
        <div className=' w-full shadow-custom rounded py-5 my-5'>
            <div className=' px-5 pb-2 flex items-center'>
                <p className=' text-[14px] sm:text-2xl font-medium mr-3'>Traveler  1</p>
                <button className=' px-2 text-[14px] sm:px-3 py-1 sm:py-2 rounded bg-gray-300 capitalize'>Adult</button>
                <p className=' text-[14px] sm:text-base text-gray-500 font-medium ml-3'>Primary Contact</p>
            </div>
            <span className=' my-3 block w-full h-[1px] bg-gray-300'></span>
            <div className=' px-5 pb-2 sm:pb-5 pt-1'>
                <p className=' text-xl font-medium capitalize'>Personal Details (Adult)</p>
                <p className=' my-1 sm:my-3 text-sm text-gray-500'>As mentioned on your passport or government approved IDs</p>
            </div>

            <div className=' px-5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-5'>
                <div>
                    <label className=' text-sm font-medium' htmlFor="firstName" >First Name</label>
                    <input id='firstName' type="text" name="firstName" className=' w-full p-2 border border-gray-300 rounded mt-1 sm:mt-2 focus:outline-none' placeholder='First Name' required />
                </div>
                <div>
                    <label className=' text-sm font-medium' htmlFor="lastName">Last Name</label>
                    <input type="text" id='lastName' name="lastName" className=' w-full p-2 border border-gray-300 rounded mt-1 sm:mt-2 focus:outline-none' placeholder='Last Name' required />
                </div>
                <div>
                    <label className=' text-sm font-medium' htmlFor="dateOfBirth">Date of Birth</label>
                    <input type="date" id='dateOfBirth' name="dateOfBirth" className=' w-full p-2 border border-gray-300 rounded mt-1 sm:mt-2 focus:outline-none' placeholder='Select a date' required />
                </div>
                <div>
                    <label className=' text-sm font-medium' htmlFor="passportNumber" >Passport Number (Optional)</label>
                    <input type="text" id='passportNumber' name="passportNumber" className=' w-full p-2 border border-gray-300 rounded mt-1 sm:mt-2 focus:outline-none' placeholder='Passport Number' required />
                </div>
                <div>
                    <label className=' text-sm font-medium' htmlFor="passportExperyDate">Passport Expiry Date (Optional)</label>
                    <input type="date" id='passportExperyDate' name="passportExpireDate" className=' w-full p-2 border border-gray-300 rounded mt-1 sm:mt-2 focus:outline-none' placeholder='Select a date' required />
                </div>
                <div>
                    <label className=' text-sm font-medium' htmlFor="city">City</label>
                    <input type="text" id='city' name="city" className=' w-full p-2 border border-gray-300 rounded mt-1 sm:mt-2 focus:outline-none' placeholder='City' required />
                </div>
                <div>
                    <label className=' text-sm font-medium' htmlFor="country">Country</label>
                    <select name="country" id="country" className=' w-full p-2 border border-gray-300 rounded mt-1 sm:mt-2 focus:outline-none'>
                        <option value="">Select a cuntry</option>
                        {
                            countries.map((country, ind) =>
                                <option key={ind} value={country.name}>{country.name}</option>
                            )
                        }
                    </select>
                </div>
                <div>
                    <label className=' text-sm font-medium'>Gender</label>
                    <select name="gender" id="country" className=' w-full p-2 border border-gray-300 rounded mt-1 sm:mt-2 focus:outline-none'>
                        <option value="">Select a Gender</option>
                        <option value={"male"}>Male</option>
                        <option value={"female"}>Female</option>
                        <option value={"others"}>Others</option>
                    </select>
                </div>
            </div>
            <div>
                <div className=' px-5 py-3 sm:p-5  '>
                    <p className=' text-base sm:text-xl font-medium'>Contact Details</p>
                    <p className=' text-sm text-gray-500 mt-1 sm:mt-2'>Receive booking confirmation & updates</p>
                </div>
                <div className=' px-5 grid grid-cols-1 sm:grid-cols-2 sm:gap-5 gap-2'>
                    <div>
                        <label className=' text-sm font-medium' htmlFor="email">Email</label>
                        <input id='email' type="email" name="email" className=' w-full p-2 border border-gray-300 rounded mt-1 sm:mt-2 focus:outline-none' placeholder='Email' required />
                    </div>
                    <div>
                        <label className=' text-sm font-medium' htmlFor="contractNumber">Contract Number</label>
                        <input id='contractNumber' type="number" name="phone" className=' w-full p-2 border border-gray-300 rounded mt-1 sm:mt-2 focus:outline-none' placeholder='Contract Number' required />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TravelerComponent