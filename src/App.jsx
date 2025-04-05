import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const App = () => {
  const [item, setItem] = useState('')
  const [arr, setArr] = useState([]);

  const SetArray=(e)=>{
    e.preventDefault()
    setArr(arr=>[...arr, item])
    setItem('')
    console.table([arr])

  }
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-lg flex shadow-md shadow-cyan-800 items-center justify-center flex-col w-full bg-black/30 mt-10  rounded-lg p-4">
        <h1 className="text-center text-4xl text-cyan-800 font-extrabold">
          Data Search
        </h1>
        <div className="relative flex max-w-lg w-full items-center justify-center mt-5">
        <input
          type="text"
         placeholder="Search..."
         value={item}
         onChange={(e)=>setItem(e.target.value)}
          className="bg-white/40 outline-0   py-2 w-[70%] text-xl  rounded-l-full  px-5 "
        /> 
        <FaSearch className="absolute text-xl right-33 top-3 text-cyan-700"/>
        <button onClick={SetArray} className="bg-cyan-700  text-white rounded-r-full py-2.5 cursor-pointer outline-none active:bg-cyan-600 px-3">Search</button>
        </div>
        <div className="mt-3 rounded-lg bg-black/40 max-w-sm flex items-center justify-center w-full "> 
        {arr.map((item, index)=>(
          <h1 key={index} className="mt-2 text-xl text-white font-bold  ">{item}</h1>
        ))}
      </div>
      </div>
  
    </div>
  );
};

export default App;
