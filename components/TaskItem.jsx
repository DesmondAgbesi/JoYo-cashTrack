// import React, {useState} from "react";
import { HiOutlineTrash }  from "react-icons/hi"
import { FiEdit }  from "react-icons/fi"

function TaskItem({task, handleDelete}) {
   
  return(
  
       <div className="overflow-y-auto w-[300px] h-[200px] bg-blue-200 p-4 rounded-lg relative">
        <div className="space-y-3 grid text-center pt-3 justify-center align-center">
          <h1 className="uppercase text-gray-500 text-sm font-bold">{task.title}</h1>
          <p className="flex-1 font-semibold text-lg capitalize">{task.body}</p>
        </div>
        <div className="absolute bottom-2 right-2">
          <div className="bg-blue-800 p-2 rounded-md" onClick={()=> handleDelete(task.id)}>
           <HiOutlineTrash height={19} color="white" />
          </div>
        </div>
        <div className="absolute bottom-2 right-[50px]">
          <div className="bg-blue-800 p-2 rounded-md" onClick={()=> handleDelete(task.id)}>
           <FiEdit height={19} color="white" />
          </div>
        </div>
       </div>

  );
}


export default TaskItem;