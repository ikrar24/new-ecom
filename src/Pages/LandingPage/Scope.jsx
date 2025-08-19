import React from "react";
import { GiClothes } from "react-icons/gi";
import { FaBook, FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Scopecard from "../../Components/Scopecard";
function Scope() {
  return (
    <section>
      <div className="w-full h-auto relative">
        {/* Background Image */}
        <img
          src="https://cdn.prod.website-files.com/66619549eba8f39855e63f8a/66de8d3fc334563cf4f6d9de_software-companies.jpeg"
          alt="ourService"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />

        {/* Content */}
        <div className="relative text-white z-10 flex w-screen  h-full justify-center items-center flex-col ">


<div className="mt-20 flex flex-col justify-center w-[90%] h-full " >
          <h5 className=" text-4xl font-semibold text-center " > Lorem ipsum <span className=" font-bold text-red-600 " >Lorems</span> sit amet consectetur adipisicing elit. Nam, omnis. </h5>





{/* icons  */}


<div>


<div className=" mt-10 flex items-center justify-center flex-wrap md:flex-row  flex-col md:gap-0 gap-20  w-auto  " >



{/* 
<div className=" flex items-center gap-3 justify-center flex-col  w-[20%] " >
    <div className=" w-[60px] h-[60px] p-2 border border-gray-400 rounded-sm  " >
<GiClothes className=" w-full h-full " />
    </div>
<GoDotFill className=" text-red-600 " />


<div className=" text-center " ><p>  </p></div>

</div> */}



<Scopecard icon={<GiClothes className=" w-full h-full" />} heading={"Lorem, ipsum"} points={"200"} />

<Scopecard icon={<FaLocationDot className=" w-full h-full" />} heading={"Lorem, ipsum"} points={"300"} />

<Scopecard icon={<FaHome className=" w-full h-full" />} heading={"Lorem, ipsum"} points={"100"} />

<Scopecard icon={<FaBook className=" w-full h-full" />} heading={"Lorem, ipsum"} points={"100"} />


</div>




<p className="mt-5 text-xl text-center " >  <span className=" text-red-600 " >Lorem ipsum</span>, dolor sit amet consectetur adipisicing elit. Enim voluptatem. </p>




</div>




</div>






        </div>




      </div>
    </section>
  );
}

export default Scope;
