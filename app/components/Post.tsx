import { ReactNode } from "react";
import { PostPayload } from "../constants/types";

const Post = ({info}: {info:PostPayload}):ReactNode => {
  return (
    <div className="w-auto border-gray-400 border-2 mb-4 px-3 py-1">
      <div className="post-header flex justify-between items-center mb-3">
        <img 
          className="rounded-full w-11 justify-self-center"
          src={info.profile_image}
        />
        <span>{info.user_name}</span>
      </div>
      <div className="post-body">
        { info.image && 
          <img src={info.image} className="justify-self-center mb-1" />
        }
        {info.post}
      </div>
    </div>
  );
}
  
export default Post;