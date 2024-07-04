import {  useState } from "react";
import axios from "axios";
const Create_Tasks = () => {
  const [task, settask] = useState([]);

  const handleadd = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then(() => location.reload())
      .catch((err) => console.log(err));
  };

  return (
    
      <div className="flex justify-center mb-5">
        <div className="border-4 border-green-500 rounded-lg ">
          <input
            type="text"
            className="p-2 w-60 rounded-md text-black cursor-default "
            onChange={(e) => settask(e.target.value)}
          />
          <button className=" bg-green-500 text-white p-2" onClick={handleadd}>
            add
          </button>
        </div>
      </div>
  );
};

export default Create_Tasks;
