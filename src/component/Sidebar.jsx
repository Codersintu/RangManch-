import React from 'react'
import logo from "../assets/pin.png"
import bell from "../assets/bell.png"
import compass from "../assets/compass.png"
import home from "../assets/home.png"
import message from "../assets/message.png"
import plus from "../assets/plus.png"
import setting from "../assets/setting.png"

const icons = [
{
   id:1,
  src:home
},
{
   id:2,
  src:compass
},
{
   id:3,
  src:plus
},
{
   id:4,
  src:message
},
{
    id:5,
    src:bell
}
]


function Sidebar() {
  return (
    <div className='w-24 bg-white h-screen border-r border-gray-300 flex flex-col items-center sticky top-0'>
      <div className="flex flex-col items-center justify-between h-full mt-4">
        <div className="flex flex-col gap-10 mt-4 items-center">
          <img src={logo} className='cursor-pointer' alt="" />
          {icons.map((icon, index) => (
          <div key={index} className="p-2 cursor-pointer hover:bg-gray-200  rounded-full">
            <img  className='w-6' src={icon.src} alt="icon" />
          </div>
          ))}
        </div>
        <div className=" rounded-full hover:bg-gray-200">
           <img src={setting} className='w-8 m-4 cursor-pointer' alt="" />
        </div>
      </div>
     
    </div>
  )
}

export default Sidebar