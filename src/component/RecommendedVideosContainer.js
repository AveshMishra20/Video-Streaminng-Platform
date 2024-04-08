import React, { useEffect, useState } from "react"
import { RecommendedVideos_API } from "../uitils/constants";
import RecommendedVideos from "./RecommendedVideos";
import {Link} from "react-router-dom"
const RecommendedVideosContainer=()=>{


    const [videos,setVideos]=useState([]);

    useEffect(()=>{
      getVideos();
    },[]);

    const getVideos= async()=>{
        const data=await fetch(RecommendedVideos_API);
        const json=await data.json();
      //console.log(json.items);
        setVideos(json.items)
    }

    return (
        <div>
           {videos.map((video)=>(<Link to={"/watch?v="+video.id} key={video.id} ><RecommendedVideos info ={video}/></Link>))} 
           
        </div>
    )
}

export default RecommendedVideosContainer