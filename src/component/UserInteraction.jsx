import Imag from "./image/Imag"

function UserInteraction() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-5">
      <div className="flex items-center gap-2">
      <div className="w-6 cursor-pointer"><Imag src="../general/heart.png"/></div>
      <p>200</p>
      </div>
      <div className="w-6 cursor-pointer"><Imag src="../general/download.png" alt="" /></div>
      <div className="w-6 cursor-pointer"><Imag src="../general/dot.png"/></div>
     </div>
      <div className="p-2 font-serif bg-red-600 text-white rounded-full cursor-pointer">Save</div>

    </div>
  )
}

export default UserInteraction