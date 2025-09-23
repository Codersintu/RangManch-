import React from 'react'
import logo from "../assets/pin.png"
import down from "../assets/down.png"
function Topbar() {
  return (
    <div className='w-full h-16'>
      <div className="flex items-center gap-2">
        <div className="w-full h-16 items-center">
          <input type="text" placeholder='Search...' className='bg-gray-200 hover:bg-gray-300 w-full h-16 px-5 rounded-xl outline-none border-4 focus:border-cyan-500'/>
        </div>
        <div className="flex items-center">
          <div className=""><img src={logo} alt="" /></div>
          <img src={down} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Topbar