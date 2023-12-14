import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { FaRegIdCard } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { FiPieChart,FiUserPlus } from "react-icons/fi";
import { FaPeopleGroup } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
import ChartComponent from "../charts/SampleChart";
import profile from '../assets/profile.jpeg'

const Content = () => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="head-text px-5 text-left text-dark-2">Good Morning, James!</h1>
        <div className="flex  items-end text-heading3-bold">
          <MdOutlineKeyboardArrowLeft />
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
      <div className="flex items-center  gap-6 mt-5 w-full mb-4 flex-wrap">
        <div className="flex flex-col ml-4  justify-start p-4 px-6 w-fit bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl">
          <div className="flex gap-14">
            <div className="p-2 rounded-full text-black">
              <FaRegIdCard className="text-heading2-bold" />
            </div>
            <div className="  cursor-pointer text-heading4-medium text-black">
            <HiDotsVertical />
            </div>

            
          </div>
          <h2 className="text-card-font">$14,3624</h2>
          <p className="text-body-semi text-[#595959]">your bank</p>
          <p className="text-body-semi  text-[#595959]">balance</p>
        </div>

        <div className="flex flex-col ml-4  justify-start p-4 px-6 w-fit bg-white rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="flex gap-14">
            <div className="p-2 rounded-full text-black">
              <FiPieChart className="text-heading2-bold" />
            </div>
            <div className="  cursor-pointer text-heading4-medium text-black">
            <HiDotsVertical />
            </div>

            
          </div>
          <h2 className="text-card-font">35%</h2>
          <p className="text-body-semi text-[#595959]">Total Sales</p>
          <p className="text-body-semi  text-[#595959]">progress</p>
        </div>

        <div className="flex flex-col ml-4  justify-start p-4 px-6 w-fit bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl">
          <div className="flex gap-14">
            <div className="p-2 rounded-full text-black">
              <FiUserPlus className="text-heading2-bold" />
            </div>
            <div className="  cursor-pointer text-heading4-medium text-black">
            <HiDotsVertical />
            </div>

            
          </div>
          <h2 className="text-card-font">450</h2>
          <p className="text-body-semi text-[#595959]">Total Users</p>
          <p className="text-body-semi  text-[#595959]">joined</p>
        </div>

        <div className="flex flex-col ml-4  justify-start p-4 px-6 w-fit bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl">
          <div className="flex gap-14">
            <div className="p-2 rounded-full text-black">
              <FaPeopleGroup className="text-heading2-bold" />
            </div>
            <div className="  cursor-pointer text-heading4-medium text-black">
            <HiDotsVertical />
            </div>

            
          </div>
          <h2 className="text-card-font">200</h2>
          <p className="text-body-semi text-[#595959]">peoples</p>
          <p className="text-body-semi  text-[#595959]">working today</p>
        </div>
        <div className="flex flex-col ml-4  justify-start p-4 px-6 w-fit bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl">
          <div className="flex gap-14">
            <div className="p-2 rounded-full text-black">
              <CiCreditCard1 className="text-heading2-bold" />
            </div>
            <div className="  cursor-pointer text-heading4-medium text-black">
            <HiDotsVertical />
            </div>

            
          </div>
          <h2 className="text-card-font">$32872.12</h2>
          <p className="text-body-semi text-[#595959]">This Week</p>
          <p className="text-body-semi  text-[#595959]">card spending</p>
        </div>
    
      </div>
      <div className="w-full flex gap-4 p-4 ">
        <div className="flex flex-col gap-4">
            
       <div className="min-w-[200px] sm:w-fit sm:h-fit min-h-[133px] bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-2 px-8 py-4 rounded-xl">
       <h2 className="text-base-bold mb-2">new clients</h2>
            <div className="flex gap-8 items-center">
            <h1 className="text-heading-main">54</h1>
            <div>
            <p className="bg-[#e0fcd9] rounded-lg text-[#7ee36b] px-2 py-1 text-subtle-semibold">+18%</p>
            </div>
            
            </div>
       </div>
       <div className="min-w-[200px] w-fit h-fit bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-2 px-8 py-4 rounded-xl">
       <h2 className="text-base-bold">innovoice overdue</h2>
            <div className="flex gap-8 items-center">
            <h1 className="text-heading-main">6</h1>
            <div>
            <p className="bg-[#fed8e2] rounded-lg ml-5 text-[#c15d6d] px-2 py-1 text-subtle-semibold">+2.7%</p>
            </div>
            
            </div>
       </div>
                
        </div>
        <div>
            <ChartComponent/>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-card-font px-4 pt-2 text-dark-4">Recent Emails</h1>
        <div className="flex flex-col bg-[#e8e6f5] rounded-md gap-1  p-3 mx-3 h-24 overflow-y-scroll email-scrollbar">
            <div className="flex flex-row justify-between items-center px-2 py-1  hover:bg-white transition-all delay-100 cursor-pointer rounded-xl">
                
                    <img className="rounded-full" src={profile} width={35} alt="" />
                
                <p className="text-small-semibold text-[#afacbf]">
                    hannah morgan
                </p>

                <p className="text-small-semibold text-[#afacbf]" >
                    meeting scheduled
                </p>

                <p className="text-small-semibold text-[#afacbf]">
                    1:24pm
                </p>

            </div>
            <div className="flex flex-row justify-between items-center px-2 py-1  hover:bg-white transition-all delay-100 cursor-pointer rounded-xl">
                
                <img className="rounded-full" src={profile} width={35} alt="" />
            
            <p className="text-small-semibold text-[#afacbf]">
                hannah morgan
            </p>

            <p className="text-small-semibold text-[#afacbf]" >
                meeting scheduled
            </p>

            <p className="text-small-semibold text-[#afacbf]">
                1:24pm
            </p>

        </div>
        <div className="flex flex-row justify-between items-center px-2 py-1  hover:bg-white transition-all delay-100 cursor-pointer rounded-xl">
                
                <img className="rounded-full" src={profile} width={35} alt="" />
            
            <p className="text-small-semibold text-[#afacbf]">
                hannah morgan
            </p>

            <p className="text-small-semibold text-[#afacbf]" >
                meeting scheduled
            </p>

            <p className="text-small-semibold text-[#afacbf]">
                1:24pm
            </p>

        </div>
        
         
     
        </div>
        
      </div>
      
    </>
  );
};

export default Content;
