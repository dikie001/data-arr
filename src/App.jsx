import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const App = () => {
  const [item, setItem] = useState("");
  const [arr, setArr] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [search, setIsSearch] = useState(false)

  const SetArray = (e) => {
    e.preventDefault();
    setArr((arr) => [...arr, item]);
    setItem("");
    console.table([arr]);
  };

  let dikie = JSON.stringify(arr)
  
  const searchFunction=(item)=>{
    for(let i=0; i<arr.length; i++){
      console.log(`Found: ${item}` )
    }
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
            onChange={(e) => setItem(e.target.value)}
            className="bg-white/40 outline-0   py-2 w-[70%] text-xl  rounded-l-full  px-5 "
          />
          <FaSearch className="absolute text-xl right-33 top-3 text-cyan-700" />
          <button
            onClick={!search? setArr: searchFunction}
            className="bg-cyan-700  text-white rounded-r-full py-2.5 cursor-pointer outline-none active:bg-cyan-600 px-3"
          >
            {search?'Add':'Search'}
          </button>
        </div>
        <div className="flex gap-4">
          <button onClick={()=>setIsSearch(true)} className="bg-black/70  text-white rounded-full py-1.5 mt-2 font-semibold cursor-pointer outline-none active:bg-black/60 px-3">
            Add Items
          </button>
          <button onClick={()=>setIsSearch(false)} className="bg-cyan-800  text-white rounded-full py-1.5 mt-2 font-semibold cursor-pointer outline-none active:bg-cyan-700 px-3"> Search Items</button>
        </div>
        <div className="mt-3 rounded-lg  p-2  bg-black/20 max-w-sm flex flex-col items-center justify-center w-full ">
          <h1 className="text-xl fonr-bold">
            {arr.length > 0 ? "Item list" : "Nothing to see here"}
          </h1>
          {arr.map((item, index) => (
            <h1
              key={index}
              className="mt-2  bg-cyan-800 py-1 px-5 w-[90%] rounded-full  text-xl text-white font-bold  "
            >
              {item}
            </h1>
          ))}
        </div>
        <button
          className="bg-black/50 mt-2 text-white font-bold  py-1 rounded-lg focus:text-cyan-400  px-2"
          onClick={() => setIsVisible((prev) => !prev)}
        >
          {isVisible ? <FaX className="py-1 px-2 text-3xl" /> : "Array"}
        </button>
        <p className="text-cyan-900 font-bold">{arr.length===0 ? 'This array is empty':null}</p>
        <p className={isVisible ? "block" : "hidden"}>
          Array: {dikie}
       </p>
      </div>
    </div>
  );
};

export default App;
