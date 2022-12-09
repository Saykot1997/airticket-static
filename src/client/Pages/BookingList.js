import { RiArrowLeftSFill } from "react-icons/ri"
import BookComponent from '../Components/BookComponent';
import SearchComponent from "../Components/SearchComponent"
import { useState } from "react";
import { BiEdit } from "react-icons/bi"
import { FiFilter } from "react-icons/fi";
import FilterComponent from "../Components/FilterComponent";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function BookingList() {
    const [searchModifyShow, setSetSearchModifyShow] = useState(true);
    const [filterModifyShow, setSetFilterModifyShow] = useState(false);

    const toggleSearchMoidifiyShow = () => {
        setSetSearchModifyShow(!searchModifyShow)
    }
    const toggleFilterMoidifiyShow = () => {
        setSetFilterModifyShow(!filterModifyShow)
    }
    // search component toggle on window resize
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 640) {
            setSetSearchModifyShow(true)
        }
    })
    // filter component toggle on window resize
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 1024) {
            setSetFilterModifyShow(false)
            setSetSearchModifyShow(false)
        }
    })

    return (
        <div className=" w-full mt-2 px-5 sm:px-16 md:px-20 lg:px-32 ">
            {/* xl:px-40 2xl:px-64 */}
            <div className=" rounded-lg border border-gray-500 bg-gray-100 p-3 flex justify-between mb-2 visible lg:hidden">
                <div>
                    <p className=" font-medium"><span className=" capitalize">Dhaka</span> - Rajshahi</p>
                    <p className=" text-gray-400 text-[12px]">25 Jhun 22 | 1 Adult </p>
                </div>
                <div onClick={toggleSearchMoidifiyShow} className=" text-primary flex flex-col justify-center items-center text-sm font-medium cursor-pointer">
                    <BiEdit />
                    <span>Modify</span>
                </div>
            </div>
            {
                searchModifyShow &&
                <SearchComponent />
            }
            <div className=" rounded-lg bg-white shadow-custom p-3 flex justify-between mb-2 visible lg:hidden px-10 mt-3">
                <p className=" font-medium">Filter your search results</p>
                <div onClick={toggleFilterMoidifiyShow} className=" text-gray-500 bg-white flex flex-col justify-center items-center font-medium cursor-pointer">
                    <FiFilter />
                </div>
            </div>

            {/* small screen filter component */}
            <div className={`${filterModifyShow ? "block" : "hidden"} bg-black bg-opacity-30 fixed top-0 left-0 w-screen h-screen z-50`}>
                <div className=" w-full p-2 sm:p-5 lg:p-10 flex justify-center  ">
                    <div className=" w-full h-[700px] overflow-y-scroll bg-white shadow-custom rounded-lg p-3">
                        <FilterComponent toggleFilterMoidifiyShow={toggleFilterMoidifiyShow} />
                    </div>
                </div>
            </div>

            <div className='  w-full grid grid-cols-3 gap-5 my-5 mt-3 sm:mt-10'>
                {/* lg screen filter component */}
                <div className="hidden lg:block ">
                    <FilterComponent />
                </div>
                <div className=' col-span-3 lg:col-span-2'>
                    <div className=' flex justify-between items-center'>
                        <button >
                            <RiArrowLeftSFill className=' text-6xl text-primary cursor-pointer' />
                        </button>
                        <p className=' font-semibold text-sm sm:text-xl xl:text-4xl'>Flights from <span className=" capitalize">Dhaka</span> to Sydny</p>
                        <button>
                            <RiArrowLeftSFill className=' text-6xl text-primary rotate-180 cursor-pointer' />
                        </button>
                    </div>
                    <BookComponent />
                    <BookComponent />
                    <BookComponent />
                    <BookComponent />
                    <BookComponent />
                    <BookComponent />
                    <BookComponent />
                    <BookComponent />
                    <BookComponent />
                    <BookComponent />
                    <BookComponent />
                    <BookComponent />

                    <div className=" flex justify-end mt-5 h-10">
                        <div className=" flex items-center">
                            <button className="bg-white h-full px-4 hover:bg-red-200 text-gray-700 border rounded-tl rounded-bl" >
                                <AiOutlineLeft />
                            </button>
                            <button className=" bg-primary h-full px-4 hover:bg-red-200 text-white" >1</button>
                            <button className="bg-white h-full px-4 hover:bg-red-200 text-gray-700 border" >2</button>
                            <button className="bg-white h-full px-4 hover:bg-red-200 text-gray-700 border rounded-tr rounded-br">
                                <AiOutlineRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BookingList