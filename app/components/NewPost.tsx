"use client"

const NewPost = () => {

    const addPost = () => {
        const newPost = document.getElementById('new-post')?.value || '';
        const postsContainer = document.getElementById('all-posts')
      }
      
return(
<div className="flex mb-2">
<input type="text" id="new-post" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

<button className="rounded-full w-10 ml-3 bg-gray-700" onClick={addPost}>+</button>

</div>
)

}

export default NewPost