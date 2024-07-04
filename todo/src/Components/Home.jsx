import { useState, useEffect } from "react";
import axios from "axios";
import Create_Tasks from "./Create_Tasks";
import { CiTrash } from "react-icons/ci";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { RiCheckboxBlankCircleLine } from "react-icons/ri";

const Home = () => {
  const [todo, settodo] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((res) => settodo(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handledit = (id)=>{
    axios
      .put("http://localhost:3001/update/"+id)
      .then(() => location.reload())
      .catch(err => console.log(err))

  };
  const handleDelete = (id)=>{
    axios
    .delete("http://localhost:3001/delete/"+id)
    .then(() => location.reload())
    .catch(err => console.log(err))
  }
  return (
    <div className="  font-semibold mt-5 mb-5 rounded-lg text-white font-mono m-3">
      <h1 className="text-center text-3xl mb-5">Todo List </h1>
      <p className=" text-center mb-5 text-xl">
        Add your daily duties and goals and implement them, hero 🤩 💪
      </p>
      <Create_Tasks />
      {todo.length === 0 ? (
        <div className="mt-10 text-2xl">
          <h1 className="text-center">No Tasks</h1>
        </div>
      ) : (
        todo.map((todos, index) => (
          <div
            key={index}
            className="bg-white text-black rounded mt-5 p-1 lg:mx-96 sm:mx-96 flex m-auto   "
          >

            <div className=" flex gap-2" onClick={()=> handledit(todos._id)}>
  
              <span className="mt-1 cursor-pointer">
              {todos.done ? <BsFillCheckCircleFill /> 
                :<RiCheckboxBlankCircleLine />} 
              </span>

              <p className={todos.done ? "line-through" : ""}>{todos.task} </p>
            </div>
            <span className=" ms-auto flex text-red-700 text-2xl cursor-pointer">
              <CiTrash onClick={() => handleDelete(todos._id)} />
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
