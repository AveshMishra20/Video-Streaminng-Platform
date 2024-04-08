import React from "react" ;

const VideoCard=({info})=>{

    //console.log(info);
    const {snippet,statistics}=info;
    const{ channelTitle,title,thumbnails}=snippet;
    const{viewCount}=statistics;

    return (
        <div className="p-2 m-2 w-72 shadow-lg">
           <img className="rounded-xl" alt="thumbnails"src={thumbnails.medium.url}></img>
           <ul>
           <li className="font-bold">{title}</li>
            <li className="font-thin py-2">{channelTitle}</li>
           
            <li className="font-thin">{viewCount} views</li>
           </ul>
        </div>
    )
}

 export default VideoCard ;