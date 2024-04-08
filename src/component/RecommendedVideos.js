import React from "react";

const RecommendedVideos=({info})=>{
    //console.log(info);
    const {snippet}=info;
    const{ channelTitle,title,thumbnails}=snippet;
  
  return(
    <div className="flex">
    

        <div className="p-2 m-2 w-40 shadow-lg hover:cursor-pointer">
           <img className="rounded-xl" alt="thumbnails"src={thumbnails.medium.url}></img>
        
        </div>
        <div>
        <ul>
           <li className="font-bold ">{title}</li>
            <li className="font-thin py-2">{channelTitle}</li>
            
            {/* <li className="font-thin">{viewCount} views</li> */}
           </ul>
        </div>
    </div>
  )
}

export default RecommendedVideos