import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import Loading from "../../global/Loading"

function Laout({ children }) {
    const isLoading = useSelector((state) => state.Loading.Loading)
    return (
        <div className=' w-full min-h-screen'>
            {
                isLoading &&
                <Loading bg="#eb1933" />
            }
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Laout