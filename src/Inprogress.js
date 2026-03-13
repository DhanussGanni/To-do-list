import { Link } from "react-router-dom";
import "./index.css"

const InProgress =({indata})=>{
    const tasks =indata
    return(
        <div className="up1">
        <h5>In Progress</h5>
        {tasks
          .filter((task) => task.Taskstatus.toLowerCase() === "in progress")
          .map((task) => (
            <div className= "status" key={task.id}>
              <Link to={`taskname/in_progress/${task.id}`}>
              <p>{task.TaskName}</p>
              </Link>
            </div>
          )
        )
        }</div>
)}

export default InProgress