import { IoCalendarOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import profile from "../assets/profile.jpeg";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoIosToday } from "react-icons/io";
import { IoTimerOutline, IoDocumentOutline } from "react-icons/io5";
import { IoMdClipboard } from "react-icons/io";

const RightSideBar = () => {
  return (
    <section className="custom-scrollbar rightsidebar ">
      <div className="flex flex-1 flex-col  bg-[#dfdffb] rounded-2xl w-[300px]">
        <div className="w-full mt-4 text-dark-2 flex gap-2 justify-center p-2 items-center">
          <div className=" flex justify-center items-center p-2 transition-all  cursor-pointer hover:bg-[#c3c3ff] hover:rounded-full ">
            <IoCalendarOutline className="text-heading4-medium" />
          </div>
          <div className=" flex justify-center items-center p-2 transition-all cursor-pointer hover:bg-[#c3c3ff] hover:rounded-full ">
            <IoMdNotificationsOutline className="text-heading4-medium" />
          </div>
          <div className=" flex justify-center items-center p-2 transition-all cursor-pointer hover:bg-[#c3c3ff] hover:rounded-full">
            <IoChatbubbleEllipsesOutline className="text-heading4-medium" />
          </div>
          <div className=" flex justify-center items-center  ">
            <img
              className="w-10 h-10 rounded-full"
              src={profile}
              alt="Rounded avatar"
            />
          </div>
          <div className=" flex justify-center items-center ">
            <RiArrowDownSLine className="text-heading4-medium" />
          </div>
        </div>

        <div className="mx-3 p-2 mt-3 h-fit shadow-sm bg-white rounded-xl ">
          <h4 className="px-3 pt-2 text-body-bold">Formation Status</h4>
          <p className="px-3 text-small-medium mb-4">in progresss</p>
          <div className="flex flex-col gap-3 justify-center items-center mb-3">
            <div className="w-full  bg-[#dfdffb] rounded-full h-2.5 mb-4 ">
              <div
                className="bg-indigo-600 h-2.5 rounded-full dark:bg-indigo-500"
                style={{ width: "80%" }}
              ></div>
            </div>
            <div className="flex flex-col text-center">
              <p className="text-base-semibold">Estimated Processing</p>
              <p className="text-small-medium">4-5 Business Days</p>
            </div>
            <button
              type="button"
              className="bg-[#6f6af8] w-full py-2 text-center rounded-xl text-white text-base-semibold"
            >
              view Status
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-2 mt-2 mx-3 mb-4">
          <h2 className="text-body-bold text-dark-2">Your to-Do list</h2>
          <div className="flex flex-col justify-center gap-3">
            <div className="flex gap-2">
              <div className="bg-[#f4f5ff]  p-3 flex items-center  text-center rounded-full">
                <IoIosToday className="text-heading4-medium" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-body-semi">run payroll</p>
                <p className="text-subtle-semibold text-[#aeabc1]">mar 04 at 8:00pm</p>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="bg-[#f4f5ff]  p-3 flex items-center  text-center rounded-full">
                <IoTimerOutline className="text-heading4-medium" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-body-semi">Review time off request</p>
                <p className="text-subtle-semibold text-[#aeabc1]">mar 04 at 8:00pm</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="bg-[#f4f5ff]  p-3 flex items-center  text-center rounded-full">
                <IoDocumentOutline className="text-heading4-medium" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-body-semi">Sign Board Resolution</p>
                <p className="text-subtle-semibold text-[#aeabc1]">mar 04 at 8:00pm</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="bg-[#f4f5ff]  p-3 flex items-center  text-center rounded-full">
                <IoMdClipboard className="text-heading4-medium" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-body-semi">Finish onboarding Tony</p>
                <p className="text-subtle-semibold text-[#aeabc1]">mar 04 at 8:00pm</p>
              </div>
            </div>
          </div>
    


        </div>

        <div className="bg-white mx-3 p-2 h-fit mt-3 mb-2 rounded-xl shadow-md flex gap-2">
            <div className="flex items-center"><div className=" w-2 h-2 bg-[#5c5ccf] rounded-full"/></div>
            <div className="flex flex-col">
                <h4 className="text-body-semi">Board Meeting</h4>
                <p className="text-[#c6c8e4] text-body-sub-semi mb-2">feb 22 at 6:00</p>
                <p className="text-[#aeafc6] text-body-sub-semi">you have been invited to attend a meeting of the Board Dire</p>
            </div>
        </div>
{/*   
        <div className="bg-white mx-3 p-2 h-fit mt-3 mb-2 rounded-xl shadow-md flex gap-2">
            <div className="flex items-center"><div className=" w-2 h-2 bg-[#5c5ccf] rounded-full"/></div>
            <div className="flex flex-col">
                <h4 className="text-body-semi">Board Meeting</h4>
                <p className="text-[#c6c8e4] text-body-sub-semi mb-2">feb 22 at 6:00</p>
                <p className="text-[#aeafc6] text-body-sub-semi">you have been invited to attend a meeting of the Board Dire</p>
            </div>
        </div> */}

      </div>
    </section>
  );
};

export default RightSideBar;
