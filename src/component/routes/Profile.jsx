import React, { useState } from "react";
import Imag from "../image/Imag";
import Content from "../Content";
import Collection from "../Collection";

function Profile() {
  const [type,setType]=useState("created")
  return (
    <div className="flex flex-col items-center gap-12">
      <div className="flex flex-col items-center gap-4">
        <div className="w-32 h-32 border cursor-pointer border-gray-300 rounded-full">
          <Imag src="../general/pin.png" />
        </div>
        <h1 className="text-4xl font-serif">Sintu Mahto</h1>
        <div className="flex flex-col items-center gap-1">
          <p className="text-2xl text-gray-500">@sintumahto</p>
          <p className="font-bold">2 following</p>
        </div>

        <div className="flex items-center gap-10">
          <div className="w-8 cursor-pointer">
            <Imag src="../general/download.png" />
          </div>
          <div className="flex items-center gap-5">
            <button className="py-4 cursor-pointer px-5 bg-gray-300 font-bold tracking-wider rounded-2xl ">Message</button>
            <button className="py-4 cursor-pointer px-5 bg-red-600 rounded-2xl text-white font-semibold tracking-wide hover:bg-red-400">Follow</button>
          </div>
          <div className="w-8 cursor-pointer">
            <Imag src="../general/dot.png"/>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <button onClick={()=>setType("created")} className={`text-xl ${type==="created"?"border-b-2 border-black" :null} font-semibold cursor-pointer`}>Created</button>
        <button onClick={()=>setType("saved")} className={`text-xl ${type==="saved"?"border-b-2 border-black" :null} font-semibold cursor-pointer`}>Saved</button>
      </div>
      {type==="created"?<Content/>:<Collection/>}
    </div>
  );
}

export default Profile;
