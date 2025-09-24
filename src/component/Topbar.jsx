import search from "../assets/search.png"
import logo from "../assets/pin.png"
import down from "../assets/down.png"
import { useState } from "react";
function Topbar() {
  const currentuser=true;
  const [open,setOpen]=useState(false);
  return (
    <div className="flex-1 z-10 sticky top-0 bg-white ">
    <div className='flex-1 flex gap-4 items-center py-4 px-3'>
        <div className="flex-1 flex items-center rounded-xl bg-gray-200 px-4 py-4 hover:bg-gray-300">
          <img className="w-5" src={search} alt="" />
          <input type="text" placeholder='Search...' className='bg-transparent flex-1 border-none outline-none px-2'/>
        </div>
        <div className="hidden md:block relative">
        <div className="flex items-center cursor-pointer">
          {currentuser==true ? <>
          <div className="object-cover"><img src={logo} alt="" /></div>
          <img onClick={()=>setOpen(!open)} src={down} alt="" />
          </>
          : <span className="cursor-pointer p-1 hover:bg-gray-200 rounded-xl">Sign In</span>}
         
          {open &&(
        <div className="flex flex-col absolute top-12 right-0 bg-white shadow-lg border rounded-lg p-4 gap-4">
            <span>Profile</span>
            <span>Setting</span>
            <span className="">Logout</span>
          </div>
          )}
          </div>
        </div>
      
    </div>
    </div>
  )
}

export default Topbar