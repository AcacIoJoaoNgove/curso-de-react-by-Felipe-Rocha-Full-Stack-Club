/* eslint-disable react/prop-types */

import { CheckIcon, ChevronRightIcon, Trash2Icon } from "lucide-react";
// import TaskPage from "../pages/TaskPage";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onDeleteTask, onTaskClick }) {
  const navagate = useNavigate();
  function onSeeDetails(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);

    navagate(`/task?${query.toString()}`);
  }

  return (
    <ul className=" space-y-4 bg-slate-200 p-6 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400  text-left w-full flex items-center gap-2 text-white p-2 rounded-md  
              ${task.isCompleted && " line-through"}`}
          >
            {task.isCompleted && <CheckIcon />}
            {task.title}
          </button>

          <Button onClick={() => onSeeDetails(task)}>
            <ChevronRightIcon />
          </Button>

          <Button onClick={() => onDeleteTask(task.id)}>
            <Trash2Icon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
