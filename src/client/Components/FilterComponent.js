import { AiOutlineClose } from "react-icons/ai";
import FilterSegmentLength from "./FilterSegmentLength";
import FilterSelectItem from "./FilterSelectItem";
import FilterTimeComponent from "./FilterTimeComponent";
import TimeoutComponent from "./TimeoutComponent"
import RangeComponent from "./RangeComponent"

function FilterComponent({ toggleFilterMoidifiyShow }) {
    return (
        <div className='col-span-1'>
            <div className=" w-full rounded-md shadow-custom pb-8 relative">
                <div className=" absolute top-5 right-5 cursor-pointer lg:hidden" onClick={toggleFilterMoidifiyShow}>
                    <AiOutlineClose className=" text-gray-500 text-2xl" />
                </div>
                <span className=' block w-full h-[1px] bg-gray-200 my-2'></span>
                <div className=' px-5 py-2'>
                    {/* <p className=' font-medium mb-5'>Departure time in Dhaka</p> */}
                    <TimeoutComponent />
                </div>
                <span className=' block w-full h-[1px] bg-gray-200 my-2'></span>
                <div className=' px-5 py-2'>
                    {/* <p className=' font-medium mb-5'>Departure time in Dhaka</p> */}
                    <RangeComponent />
                </div>
                <span className=' block w-full h-[1px] bg-gray-200 my-2'></span>
                <div className=' px-5 py-2'>
                    <p className=' font-medium mb-5'>Departure time in Dhaka</p>
                    <FilterTimeComponent />
                </div>
                <span className=' block w-full h-[1px] bg-gray-200 my-2'></span>
                <div className=' px-5 py-2'>
                    <p className=' font-medium '>Stops From Dhaka</p>
                    <div className=' mt-3 text-gray-500'>
                        <FilterSegmentLength l={1} />
                        <FilterSegmentLength l={2} />
                        <FilterSegmentLength l={3} />
                        <FilterSegmentLength l={4} />
                    </div>
                </div>
                <span className=' block w-full h-[1px] bg-gray-200 my-2'></span>
                <div className=' px-5 py-2'>
                    <p className=' font-medium '>Airlines</p>
                    <div className=' flex justify-between mt-3 text-gray-500'>
                        <FilterSelectItem />
                    </div>
                    <div className=' flex justify-between mt-3 text-gray-500'>
                        <FilterSelectItem />
                    </div>
                    <div className=' flex justify-between mt-3 text-gray-500'>
                        <FilterSelectItem />
                    </div>
                    <div className=' flex justify-between mt-3 text-gray-500'>
                        <FilterSelectItem />
                    </div>
                </div>
                <div className=" w-full mt-3 px-5">
                    <button className=' hover:bg-primary py-2 px-3 w-full rounded hover:text-white bg-white border-primary border transition-all ease-in duration-300 text-primary'>Clear Filter</button>
                </div>
            </div>
        </div>
    )
}

export default FilterComponent