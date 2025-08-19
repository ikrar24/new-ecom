import React from 'react'
import { GiClothes } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";

function Scopecard( { icon , heading , points } ) {
  return (
   <div className=" flex items-center gap-2 justify-center flex-col  w-[20%] " >
    <div className=" w-[60px] h-[60px] p-2 border border-gray-400 rounded-sm  " >


{icon}
    </div>
<GoDotFill className=" text-red-600 " />

<div> <p className=" text-5xl font-bold " >{points}</p> </div>

<div className=" text-center text-sm " ><p> {heading} </p></div>

</div>
  )
}

export default Scopecard
