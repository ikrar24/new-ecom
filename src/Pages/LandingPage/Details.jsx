import React from "react"
import { FaCheck } from "react-icons/fa"; 

function Details() {
  return (
<section className=" p-3 bg-slate-200 flex items-center justify-center w-full  " >
          
<div className=" flex gap-10 md:flex-row md:justify-between flex-col items-center md:items-center w-full  " >

    {/* text content  */}


<div className=" md:w-[60%] w-full h-[100%] md:gap-5 flex flex-col items-end text-right  justify-end p-2 " >
    <div>
 <h3 className=" text-3xl text-red-800 font-semibold " > Details </h3>
    </div>
    
<h4 className=" text-5xl text-right font-semibold w-full md:w-[80%] " >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem velit <span className=" font-bold " >dolores sint maiores</span> deleniti.
</h4>


<p className=" md:w-[70%] text-sm text-gray-200 " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et doloribus sint voluptas explicabo iste ducimus dolor, sequi laboriosam dicta, dolore quia ipsum dolorem voluptatum excepturi adipisci fugiat, aspernatur possimus?</p>





<div className=" md:items-center flex items-end justify-end md:justify-between gap-3 flex-wrap " >




<div className=" items-center justify-normal gap-3 flex " >
<FaCheck className=" text-red-700 " />
    <p className=" " >Lorem ipsum dolor sit amet.</p>
</div>

<div className=" items-center justify-normal gap-3 flex " >
<FaCheck className=" text-red-700 " />
    <p className=" " >Lorem ipsum dolor sit amet.</p>
</div>

</div>





 <div className="flex items-center mt-5 justify-center gap-6">

              <button className="hover:bg-red-800 border p-2 transition-all border-1 border-black ">
               Lorem, ipsum.
              </button>
              <button className="border-1 border-black p-2 bg-red-500 hover:bg-transparent transition-all">
                Lorem, ipsum dolor.
              </button>
            </div>





</div>



{/* img  */}
<div className=" w-full md:w-auto flex md:items-end md:justify-end  items-start justify-start   " >
    <img src="https://themetechmount.com/wordpress/fablio/fablio-rtl/wp-content/uploads/sites/5/2021/03/col-bg-007.jpg" alt="picture" />
</div>



</div>


</section>
  )
}

export default Details
