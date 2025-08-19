import React from "react";
import HeroContent from "../../Components/HeroContent";

function HeroSection() {
  return (
    <>
      <section className="w-full h-auto">
        {/* left red bar */}
        <div className="md:flex hidden z-0 relative bg-red-500 w-[50%] h-[110vh] text-white font-bold">
          <p className="rotate-[90deg] absolute top-[50%] left-[-10%]">
            +91 9060917993 Contact Number
          </p>
        </div>

        {/* hero main content */}
        <main className="absolute bg-black md:top-32 md:right-14 md:w-[90%] w-full h-[90%]">
          {/* background image */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7-RFA1xE4wTSP0DZJSJ1AJ8TitBYtkmEYA&s"
            alt="backgroundPic"
            className="absolute object-cover w-full h-full z-0 brightness-50"
          />

          {/* centered content */}

        <HeroContent subHeading="Service" mainHeading="Best Service On The World" info="Lorem ipsum dolor sit amet consectetur adipisicing elit. In delectus, nulla neque consequuntur quasi, sequi est."  firstBtn="Lorem ipsum dolor."  sndBtn="Lorem ipsum." />


        </main>
      </section>
    </>
  );
}

export default HeroSection;
