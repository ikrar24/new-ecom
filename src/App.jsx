import React from "react"
import Navbar from "./Pages/LandingPage/Navbar"
import HeroSection from "./Pages/LandingPage/HeroSection"
import ProductsOnLanding from "./Pages/LandingPage/ProductsOnLanding"
import VideoLanding from "./Pages/LandingPage/VideoLanding"
import Details from "./Pages/LandingPage/Details"
import Scope from "./Pages/LandingPage/Scope"
function App() {
  return (
<>

<div className=" flex  items-center justify-center w-screen h-auto " >
  <div className=" flex flex-col w-[99%] md:w-full  items-center justify-center  h-auto  "  >
<Navbar/>
<HeroSection/>
<ProductsOnLanding/>
<VideoLanding/>
<Details/>
<Scope/>
  </div>
</div>




</>
  )
}

export default App
