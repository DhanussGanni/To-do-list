import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Addon = () => {
    const [TaskName, SetTaskName] = useState("")
    const [TaskDetails, SetTaskDetails] = useState("")
    const [Taskstatus, SetTaskstatus] = useState("Yet to start")
    const history = useNavigate();

    const handlesubmit =(e) =>{
        e.preventDefault()
        const TaskUploads = {TaskName,TaskDetails,Taskstatus}
        fetch("https://moises-subelemental-nonshrinkingly.ngrok-free.dev/TaskUploads",{
            method : "POST",
            headers :{"Content-Type": "application/json",
                "ngrok-skip-browser-warning":"true"
            },
            body: JSON.stringify(TaskUploads)
        })
        .then(()=>{
            history('/')
            console.log("Data has been added")
        })
        .catch((err) => {
        console.error("Error submitting form:", err);})
    }
    return (
        <div className="create">
            <h3>New Task</h3>
            <form onSubmit={handlesubmit}>
                <label>Task Name</label>
                <input type="text" value={TaskName} onChange ={(e)=>SetTaskName(e.target.value)} placeholder="Task Name" required/>
                <label>Detail of the task</label>
                <textarea value={TaskDetails} onChange ={(e)=>SetTaskDetails(e.target.value)} placeholder="Detail of the Task" required/>
                <label>Status</label>
                <select value={Taskstatus} onChange ={(e)=>SetTaskstatus(e.target.value)} placeholder="select" required >
                    <option value="Yet to start">Yet to start</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <button type="submit" >Save</button>
            </form>
            
        </div>
    )
}

export default Addon