import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../Photos/logo.svg"
import Login from './Login';


function Header() {
    const [isLoginComponentOpen, setIsLoginComponentOpen] = useState(false);
    const toggleLogin = () => {
        setIsLoginComponentOpen(!isLoginComponentOpen);
    }
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    const logout = () => {
        localStorage.removeItem("user")
        setUser(null)
    }

    return (
        <div className=' px-5 sm:px-16 md:px-20 lg:px-32  w-full py-5 flex justify-between'>
            {/* xl:px-40 2xl:px-64 */}
            <div>
                <Link to="/">
                    <img src={logo} alt="" className=' w-32 sm:w-40' />
                </Link>
            </div>
            <div>
                {
                    user ?
                        <div className=' flex items-center'>
                            <Link to="/profile" className=' font-medium'>Profile</Link>
                            <button onClick={logout} className=' text-primary font-medium ml-2'>Sign out</button>
                        </div>
                        :
                        <button onClick={toggleLogin} className=' bg-primary py-1 sm:py-2 px-2 sm:px-3 rounded text-white hover:bg-white hover:border-primary border transition-all ease-in duration-300 hover:text-primary'>Sign in</button>
                }
            </div>
            {
                isLoginComponentOpen &&
                <Login toggleLogin={toggleLogin} setUser={setUser} />
            }
        </div>
    )
}

export default Header