import React from "react";
import VideoCard from "../../Components/VideoCard";

export default function VideoLanding() {
const videos = [
{
thumbnail:
"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
},
{
thumbnail:
"https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
videoUrl: "https://www.w3schools.com/html/movie.mp4",
},
{
thumbnail:
"https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1200&auto=format&fit=crop",
videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
},
{
thumbnail:
"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
videoUrl: "https://www.w3schools.com/html/movie.mp4",
},

];

return (
<section className="mx-auto p-5 ">
<div className="flex flex-wrap  w-full  gap-5 justify-center">
{videos.map((v, i) => (
<div key={i} className="md:w-[40%]  sm:w-[90%] w-full ">
<VideoCard {...v} />
</div>
))}
</div>

{/* sm:w-1/2 lg:w-1/3 xl:w-1/4 */}
</section>
);
}