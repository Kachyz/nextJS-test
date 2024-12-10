"use client"

import { useState } from "react";

export default function UpdateButtons(){
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const editHandler = () =>{
    setIsEditing(!isEditing);
  }

  return (
    <div id="editButtonsContainer" className="w-60 flex justify-between justify-self-center">
      <button 
        type="button" 
        className={`${isEditing ? "visible" : "invisible"} text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-20`}
        onClick={() => setIsEditing(false)}
      >
        Cancel
      </button>

      <button 
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-20"
        onClick={editHandler}
      >
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
  );
}
