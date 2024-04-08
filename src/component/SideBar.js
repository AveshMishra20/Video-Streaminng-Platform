import React from "react";
import {useSelector} from 'react-redux';
import {Link} from "react-router-dom"
const SideBar=()=>{
    const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
    // early return 
if(!isMenuOpen) return null;

    return (
        <div>
            <ul className="shadow-lg " >
                <li className="p-2 m-2 hover:bg-gray-200 rounded-lg font-light"><Link to="/">Home</Link></li>
                <li className="p-2 m-2 hover:bg-gray-200 rounded-lg font-light">Shorts</li>
                <li className="p-2 m-2 hover:bg-gray-200 rounded-lg font-light" >Subscription</li>
                <li className="p-2 m-2 hover:bg-gray-200 rounded-lg font-light">You</li>
            </ul>
        </div>
    )
}
 export default SideBar;