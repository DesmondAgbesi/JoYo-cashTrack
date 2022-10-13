import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
// import { set } from "react-hook-form";
// import useLocalStorage from "../hooks/useLocalStorage";
import TaskItem from "../components/TaskItem";
import { useNameContext } from "../context/nameContext";
import axios from "axios";

// const getTasksFromLocalStorage = ()  =>{
// // const [ tasks, setTasks] = useState(() => {
//   //get the task from the localStorage
//   const savedTasks = localStorage.getItem("tasks");
//   console.log("savedTasks");
//   if (!savedTasks) return []
//   return JSON.parse(savedTasks);
//}

export default  function Daily() {
  // const [tasks, setTasks] = useState(getTasksFromLocalStorage)
  // const { data, setValue } = useLocalStorage("tasks", []);
  const { name } = useNameContext();
  const [ data, setData ] = useState({
      title: "",
      body: "",
      completed: false,
  });
  const [error, setError] = useState("")
  
  const [ dailyTask, setDailyTask ] = useState([])

  const getDailyTasks = async () =>{
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/daily`)
    const getData = res.data.daily

    setDailyTask(getData);
  }



  useEffect(() => {
    getDailyTasks()
   }, []);
  
  

   const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value})
   }




  const  handleSubmit = async (e) => {
    e.preventDefault();
    
    if (data.title === "" && data.body === "") {
      setError("Kindly fill all fields");
      return;
    };

    const newTask = {
      id: uuid(),
      ...data,
    }


    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/daily`,
      newTask
      )
      
      await getDailyTasks()

    } catch (error) {
      setError(error.message)
    }
  };

  const handleDelete = async (id) => {
    const newTasks = data.filter((task) => task.id === id);
    setValue(newTasks);
  };

  // useEffect(() =>{
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  return (
    <div className="">
      <div className="grid gap-4 justify-center align-center">
        <div className="text-center">
          <h3 className="bg-grey-800">Welcome, {name}!</h3>
          <h1 className="text-2xl font-bold">Add a new thing to do</h1>
        </div>
        {error && <p className="text-center text-red-500">{error}</p>}
        <div className="">
          <form onSubmit={handleSubmit} className=" space-y-5 w-[30rem] mb-10 ">
            <input
              placeholder="Title of task"
              onChange={handleChange}
              value={data.title}
              type="text"
              name="title"
              className="border-blue-400 rounded-md outline-none border-2 p-2 text-center w-full h-7"
            />
            <input
              type="text-area"
              placeholder="Input task details here"
              onChange={handleChange}
              value={data.body}
              name="body"
              className="border-blue-400 rounded-md outline-none border-2 p-2 text-center w-full "
            />
            <button
              type="submit"
              // disable={input === 0 && detail === 0}
              className="bg-blue-600 p-2 rounded-md text-white text-lg w-full"
            >
              Add
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="flex flex-wrap gap-5 max-w-[70%] justify-start pl-10">
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nostrum deleniti repudiandae, non quos sequi ratione voluptates nisi tempore obcaecati rerum soluta vel mollitia at ad, eveniet iure cumque magnam?</p> */}
          {dailyTask.map((v, i) => (
            <TaskItem task={v} key= {i} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}
