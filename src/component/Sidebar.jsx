
import { Link, Links } from "react-router-dom";

import Imag from "./image/Imag";
import { useState } from "react";
function Sidebar() {
  const [open,setopen]=useState(false)
  return (
    <div className="w-14 md:w-24 z-10 bg-white h-screen border-r border-gray-300 flex flex-col items-center sticky top-0">
      <div className="flex relative flex-col items-center justify-between h-full mt-4">
        <div className="flex flex-col gap-10 mt-4 items-center">
          <Link to="/">
          <div className="w-12">
            <Imag src="../general/pin.png" alt="" />
            </div>
          </Link>
          <Link to="/">
            <div className="p-2 cursor-pointer w-11 hover:bg-gray-200  rounded-full">
              <Imag className="w-7" src="../general/home.png" alt="icon" />
            </div>
          </Link>
          <Link to="/">
          <div className="p-2 cursor-pointer w-11 hover:bg-gray-200  rounded-full">
            <Imag className="w-7" src="../general/compass.png" alt="icon" />
          </div>
          </Link>
          <Link to="/create">
          <div className="p-2 cursor-pointer w-11 hover:bg-gray-200  rounded-full">
            <Imag className="w-7" src="../general/plus.png" alt="icon" />
          </div>
          </Link>
          <Link to="/">
          <div className="p-2 cursor-pointer w-11 hover:bg-gray-200  rounded-full">
            <Imag className="w-7" src="../general/message.png" alt="icon" />
          </div>
          </Link>
          <div className="p-2 cursor-pointer w-11 hover:bg-gray-200  rounded-full">
            <Imag className="w-7" src="../general/bell.png" alt="icon" />
          </div>
        </div>
        <div onClick={()=>setopen(!open)} className="cursor-pointer rounded-full md:mb-10 mb-20  hover:bg-gray-200">
          <Imag src="../general/setting.png"  alt="" />
        </div>
        {open &&(
        <div className="flex flex-col absolute bottom-24 -left-5 bg-white shadow-lg border rounded-lg p-4 gap-4">
          <Link to="/profile">
            <span className="cursor-pointer font-serif hover:bg-gray-200 ">Profile</span>
            </Link>
            <span className="cursor-pointer font-serif hover:bg-gray-200 ">Setting</span>
            <span className="cursor-pointer font-serif hover:bg-gray-200 ">Logout</span>
          </div>
          )}
      </div>
    </div>
  );
}

export default Sidebar;
