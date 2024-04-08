import React from "react"


const Comment =({info})=>{
  //  console.log(info);
    //info.snippet.topLevelComment.snippet.textOriginal
    
    
    return (
        <div className="my-2 flex shadow-lg">
            
            
            <img  className="w-12 h-12 m-2" alt="user" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"></img>
            <div>
            <h4 className="font-bold ">{info.snippet.topLevelComment.snippet.authorDisplayName}</h4>
            {/* <p> Jai Shree Ram Radhey Radhey 🙏🙏</p> */}
            <p>{info.snippet.topLevelComment.snippet.textOriginal}</p>
            </div>
            

        </div>
    )
}
 
export default Comment