import React from 'react'
import { useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer';
import RecommendedVideosContainer from './RecommendedVideosContainer';


const WatchPage = () => {

 const [searchParam]=useSearchParams();
 //console.log(searchParam.get("v"));
 


  return (
    <div className="p-4 m-4 flex">
     <div className="w-3/4 mx-4">
     <iframe width="850"
       height="400"
        src={"https://www.youtube.com/embed/"+searchParam.get("v")} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
        >

        </iframe>

        <CommentContainer info={searchParam.get("v")}/>
     </div>
     <div>
      <RecommendedVideosContainer />
     </div>
    </div>
  )
}

export default WatchPage