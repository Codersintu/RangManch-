
import { useState } from "react";
import Imag from "./image/Imag";
import { Link } from "react-router-dom";
function Topbar() {
  const currentuser=false;
  const [open,setOpen]=useState(false);
  return (
    <div className="flex-1 z-10 sticky top-0 bg-white py-4 ">
    <div className='flex-1 flex gap-4 items-center '>
        <div className="flex-1 flex items-center rounded-xl bg-gray-200 px-4 py-4 hover:bg-gray-300">
         <div className="w-5"> <Imag  src="../general/search.png" alt="" /></div>
          <input type="text" placeholder='Search...' className='bg-transparent flex-1 border-none outline-none px-2'/>
        </div>
        <div className="hidden md:block relative">
        <div className="flex items-center cursor-pointer">
          {currentuser==true ? <>
          <Link to="/profile">
          <div className="object-cover w-14"><Imag className="" src="../general/pin.png" alt="" /></div>
          </Link>
          <div className="w-8" onClick={()=>setOpen(!open)}><Imag className=""  src="../general/down.png" alt="" /></div>
          </>

          : <Link to="/auth"><span className="cursor-pointer p-1 hover:bg-gray-200 rounded-xl">Sign In</span></Link>}
         
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