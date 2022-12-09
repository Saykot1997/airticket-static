import React, { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai"

function Login({ toggleLogin, setUser }) {

    const [registerMod, setRegisterMod] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            email,
            password
        }
        // console.log(data)
        localStorage.setItem("user", JSON.stringify(data))
        setUser(data)
        toggleLogin()
    }

    const toggleRegisterMod = () => {
        setRegisterMod(!registerMod)
    }


    return (
        <div className=' fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 flex justify-center items-center z-50'>
            <div className=' bg-white rounded-md w-[350px] h-[420px] overflow-hidden'>
                <div className=' bg-red-50 flex justify-between p-5'>
                    <p className=' font-medium text-xl text-gray-500'>{registerMod ? "Sign Up" : "Sign In"}</p>
                    <AiOutlineClose onClick={toggleLogin} className=' text-lg cursor-pointer hover:text-gray-600' />
                </div>
                <form onSubmit={handleSubmit} className=' p-5'>
                    <div className=' pb-3 relative'>
                        <label htmlFor="email">Email Address</label>
                        <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" required placeholder='Enter email address' className=' w-full placeholder:text-gray-500 p-2 border border-gray-400 rounded-md mt-2 focus:outline-none' />
                    </div>
                    <div className=' pb-3 relative'>
                        <label htmlFor="email">Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder='Enter password' className=' w-full placeholder:text-gray-500 p-2 border border-gray-400 rounded-md mt-2 focus:outline-none' />
                    </div>
                    <div className=' w-full mt-3'>
                        <button type='submit' className=' bg-primary py-2 px-3 w-full rounded text-white hover:bg-white hover:border-primary border transition-all ease-in duration-300 hover:text-primary'>{registerMod ? "Sign Up" : "Sign in"}</button>
                    </div>
                    <p className=' text-center my-1'>or</p>
                    <div className=' w-full'>
                        <button onClick={toggleRegisterMod} className=' hover:bg-primary py-2 px-3 w-full rounded hover:text-white bg-white border-primary border transition-all ease-in duration-300 text-primary'>{registerMod ? "Sign In" : "Sign Up"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login