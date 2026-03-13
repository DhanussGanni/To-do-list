import { Link } from "react-router-dom"
import "./index.css"

const Completedones =({indata})=>{
    const tasks =indata
    return(
        <div className="done">
         <h5>Completed</h5>
         {tasks
          .filter((task) => task.Taskstatus === "Completed")
          .map((task) => (
            <div className="status" key={task.id}>
              <Link to={`taskname/compelete/${task.id}`}>
              <p>{task.TaskName}</p>
              </Link>
              </div>
          )
        )}
       </div>
    )
}

export default Completedones