import React, { useEffect, useState } from 'react'
import { VideosCategories_API } from '../uitils/constants';
import {MdChevronLeft,MdChevronRight, MdSnippetFolder} from 'react-icons/md';

const ButtonList = () => {

  const slideLeft=()=>{
    var slider=document.getElementById("slider");
    slider.scrollLeft=slider.scrollLeft-500;

  }
  const slideRight=()=>{
    var slider=document.getElementById("slider");
    slider.scrollLeft=slider.scrollLeft+500;
    
  }
  const[keyword,setKeyword]=useState([]);
  useEffect(()=>{
    getCategories();
  },[]);

  const getCategories= async()=>{
    const data=await fetch(VideosCategories_API);
    const json=await data.json();
    setKeyword(json.items);
  }
  return (
    <div className='relative flex w-screen' >
    <MdChevronLeft className='hover:cursor-pointer my-2'onClick={slideLeft}size={40}/>
      <div id='slider' className='w-full h-full overflow-x-scroll whitespace-nowrap no-scrollbar scroll scroll-smooth'>
      {
          keyword.map((categories)=>(<button key={categories.id}className='bg-gray-300 rounded-xl m-2 p-2'>{categories.snippet.title}</button>))
        }
      </div>
        <MdChevronRight className='hover:cursor-pointer my-2 mx-4'onClick={slideRight}size={40}/>
    </div>
  )
}

export default ButtonList