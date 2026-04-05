import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import usefetch from "./fetchdata.js"
import "./index.css"


const Edittask = ()=>{
    const {id} = useParams();
    const [TaskDetails,SetTaskDetails] = useState("")
    const [Taskstatus,SetTaskstatus] = useState("")
    const [TaskName,SetTaskName] = useState("")
    const { Data, Ispending, Iserror } = usefetch('http://localhost:8000/TaskUploads/' + id)
    const navigate = useNavigate();

    useEffect(()=>{
        if(Data){
            SetTaskDetails(Data.TaskDetails)
            SetTaskName(Data.TaskName)
            SetTaskstatus(Data.Taskstatus)
        }},[Data])
       const handlesubmit =(e) =>{
        e.preventDefault()
        const UpdatedDetails = {TaskName,TaskDetails,Taskstatus}
        fetch("http://localhost:8000/TaskUploads/" + id,{
            method : "PATCH",
            headers :{"Content-Type": "application/json",
            "ngrok-skip-browser-warning":"true"},
            body: JSON.stringify(UpdatedDetails)
        })
        .then(()=>{
            navigate('/')
            console.log("Data has been updated")
        })
        .catch((err) => {
        console.error("Error submitting form:", err);})
    }
    return (
        <div className="Update">
                  {Ispending && <div>Loading...</div>}
                  {Iserror && <div>Error loading task</div>}
                   <h3>Update the Task</h3>
            {Data && (<form onSubmit={handlesubmit}>
                <label>Task Name</label>
                <input type="text" value={TaskName} onChange ={(e)=>SetTaskName(e.target.value)} required/>
                <label>Detail of the task</label>
                <textarea value={TaskDetails} onChange ={(e)=>SetTaskDetails(e.target.value)}  required/>
                <label>Status</label>
                <select value={Taskstatus} onChange ={(e)=>SetTaskstatus(e.target.value)} required >
                    <option value="Yet to start">Yet to start</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <button type="submit" >Update</button>
            </form>)}
            
        </div>
    )
}


export default Edittask