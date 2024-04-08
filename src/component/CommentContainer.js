import React, { useEffect  ,useState} from 'react'

import { API_Key, Youtube_Videos_Comment_Api } from '../uitils/constants';
import Comment from './Comment'
const CommentContainer = ({info}) => {

  const [comments,SetComments]=useState([]);

  useEffect(()=>{
    getComment();
  },[]);

  const getComment= async()=> {
    const data=await fetch(Youtube_Videos_Comment_Api+info+"&key="+API_Key);
    const json=await data.json();
   // console.log(json.items);
     SetComments(json.items)
  }


  return (
    <div>
        <h1 className="p-2 m-4 text-2xl font-bold ">Comment :</h1>
        {/* <Comment info={comments[1]}/> */}
        {comments.map((comment)=>(<Comment key={comment.id} info={comment}/>))}
       
    </div>
  )
}

export default CommentContainer