import React, { useState } from "react";

function VideoCard({ thumbnail, videoUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full flex justify-center px-2">
      {/* Container without max-width restriction */}
      <article className="relative w-full flex items-center justify-center rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
        {!isPlaying ? (
          <>
            <img
              src={thumbnail}
              alt="Video thumbnail"
              className="
                w-full 
                max-w-[1600px]   /* bada kiya */
                aspect-video 
                object-cover 
                mx-auto
              "
            />
            {/* Play button */}
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 m-auto h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 grid place-items-center rounded-full bg-red-600 text-white shadow-lg opacity-90 group-hover:scale-110 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-8 w-8 md:h-10 md:w-10 translate-x-0.5"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </>
        ) : (
          <video
            src={videoUrl}
            autoPlay
            loop
            className="
              w-full 
              max-w-[1600px]   /* bada kiya */
              aspect-video 
              object-cover 
              mx-auto
            "
          />
        )}
      </article>
    </div>
  );
}

export default VideoCard;
