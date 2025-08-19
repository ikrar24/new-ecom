import React from 'react'

function HeroContent({ subHeading, mainHeading, info, firstBtn , sndBtn }) {
  return (
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center text-center text-white px-6">
            <p className="text-lg">{ subHeading }</p>

            <h1 className="text-4xl font-bold my-4">
             {mainHeading}
            </h1>

            <p className="max-w-[600px] mb-6">
{info}
            </p>

            <div className="flex items-center justify-center gap-6">
              <button className="border p-2 bg-red-800 hover:bg-transparent transition-all">
                {firstBtn}
              </button>

              <button className="hover:bg-red-800 border p-2 transition-all">
               {sndBtn}
              </button>
            </div>
          </div>
  )
}

export default HeroContent
