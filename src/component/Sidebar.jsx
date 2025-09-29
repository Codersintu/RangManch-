
import { Link } from "react-router-dom";

import Imag from "./image/Imag";
function Sidebar() {
  return (
    <div className="w-24 z-10 bg-white h-screen border-r border-gray-300 flex flex-col items-center sticky top-0">
      <div className="flex flex-col items-center justify-between h-full mt-4">
        <div className="flex flex-col gap-10 mt-4 items-center">
          <Link to="/">
            <Imag src="../general/pin.png" className="cursor-pointer w-11" alt="" />
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
        <div className=" rounded-full hover:bg-gray-200">
          <Imag src="../general/setting.png" className="m-4 cursor-pointer w-8" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
