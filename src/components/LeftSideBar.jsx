/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { Link,useLocation } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { sidebarLinks } from "../constants/sidebar";

const HoverContainer = ({ children, className }) => {
  return (
    <div
      className={`p-3 transition-all hover:bg-[#9c99fe] rounded-full cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};

const LeftSideBar = () => {
  const location = useLocation()
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full h-fit bg-[#6f6af8] rounded-2xl text-white  flex-1 flex-col gap-3 px-3">
        <p className="mb-10 mt-4 font-bold">dappr</p>

        {sidebarLinks.map((link) => {
          const isActive = location.pathname === link.route;
          return (
            <HoverContainer className={`text-center flex items-center justify-center text-heading4-medium`} >
              <Link to={link.route} className={`${isActive?'text-card-font text-black flex':''}`}>
                <link.icon />
                {/* {link.label} */}
              </Link>
            </HoverContainer>
          );
        })}

        <div className="mt-auto mb-14 flex justify-center items-center">
          <HoverContainer>
            <Link to={"/"}>
              <IoSettingsOutline />
            </Link>
          </HoverContainer>
        </div>
      </div>
    </section>
  );
};

export default LeftSideBar;
