import { Link } from "react-router-dom"
import "./index.css";

const Yello = ({indata}) =>{
  const tasks = indata
  if (!tasks) return <p>Loading tasks...</p>;
   console.log(tasks, typeof tasks);
    return(
        <div className="Y">
        <h5>To Do Task's</h5>
        {tasks
          .filter((task) => task.Taskstatus === "Yet to start")
          .map((task) => (
            <div className="status" key={task.id}>
              <Link to={`taskname/yettostart/${task.id}`}>
              <p>{task.TaskName}</p>
              </Link>
            </div>
          ))}
          </div>
    )
}

export default Yello