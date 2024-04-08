import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import { toggleMenu } from '../uitils/appSlice';
import { Search_Suggestion_API } from '../uitils/constants';

const Head = () => {
   const [searchQuerry ,setSeacrhQuerry]=useState("");
   const [suggestions,setSuggestions]=useState([]);
  
   useEffect(()=>{
      const timer=setTimeout(()=>getSearchSuggestion(),200);
      return()=>
      {  
          clearTimeout(timer);
      } 

   },[searchQuerry]);

   const getSearchSuggestion= async()=>
   {
    
      const data=await fetch(Search_Suggestion_API+ searchQuerry);
      const json=await data.json();
      // setSeacrhQuerry(json);
      console.log(json)
      setSuggestions(json[1]);

   }

const dispatch=useDispatch();

const toggleMenuHandler=()=>{
   dispatch(toggleMenu());

}

  return (
    <div className="flex justify-between m-2 p-4  shadow-lg">
     <div className="flex justify-between">
        <img 
        onClick={()=>toggleMenuHandler()}
        className="h-14 cursor-pointer" alt ="menu" src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"></img>
        <img className="h-14" alt="Youtube-Logo" src="https://toppng.com/uploads/preview/green-youtube-logo-11549681141btnfnpwqzq.png"></img>
     </div>
     <div>
        
        <div>
        <input  className="border border-black w-96 px-3 rounded-l-full" type="text"
         value={searchQuerry}
         onChange={(e)=>setSeacrhQuerry(e.target.value)}
        />
        <button className="bg-gray-200 rounded-r-full px-4 border border-black">🔍</button>
        </div>
        <div className='relative bg-white px-2 py-2 shadow-lg w-96 rounded-lg border border-gray-200 '>
         <ul>
            {suggestions.map((s)=>(<li  key ={s} className='px-5 py-3 shadow-sm hover:bg-gray-100'>🔍 {s}</li>))}
         </ul>
        </div>
     </div>
     <div>
        <img  className="h-10" alt="user" src="https://cdn-icons-png.freepik.com/512/219/219986.png">
        </img>
     </div>
    </div>
  )
}

export default Head