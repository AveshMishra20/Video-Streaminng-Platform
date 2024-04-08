import React from 'react'

const list=["Avesh", "cricket","Live","News","Avesh", "cricket","Live","News","Avesh", "cricket","Live","News","Avesh", "cricket","Live","News","Avesh", "cricket","Live","News","Avesh", "cricket","Live","News","Avesh", "cricket","Avesh", "cricket","Live","News","Avesh", "cricket","Avesh", "cricket","Live","News","Avesh", "cricket","Avesh",];

const Button = () => {

  return (
    <div className='w-screen'>
      <ul className='flex flex-row gap-4 text-ellipsis overflow-x-scroll scroll-smooth'
       >
      {
        list.map((items,index)=>(
           <li key={index} className='px-2 py-1  bg-gray-800 text-white rounded-2xl'>
            {items}
           </li>
        ))
      }
      </ul>
     
    </div>
  )
}

export default Button
