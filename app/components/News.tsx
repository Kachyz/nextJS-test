"use client"

import { useState } from 'react';
import Post from './Post';
import { PostPayload } from '../constants/types';

const News = (props) => {
    
    const [posts, setPosts] = useState(props.data)
    const addPost = () => {
        const newPost = document.getElementById('new-post')?.value || '';
        let allPosts = posts;
        allPosts.unshift({
            user_name: "c-estrada",
            id: 888,
            post: {newPost}
        });

        setPosts(allPosts)
    }
      
    return(
        <div className="postContainer">
            <div className="flex mb-2">
            <input type="text" id="new-post" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

            <button className="rounded-full w-10 ml-3 bg-gray-700" onClick={addPost}>+</button>

            </div>
            {
                posts.map((post:PostPayload) => <Post key={post.id} info={post} />)
            }
        </div>
    )

}

export default News;
