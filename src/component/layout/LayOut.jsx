import {Outlet} from "react-router-dom"
import Topbar from "../Topbar"
import Sidebar from "../Sidebar"

function LayOut() {
  return (
     <div className="flex w-full h-screen ">
    <Sidebar/>
    <div className="bg-white flex-1 overflow-auto">
      <Topbar/>
      <Outlet/>
    </div>
   </div>
  )
}

export default LayOut