import { useParams } from "react-router-dom";
import useFetch from "./fetchdata";
import { useNavigate } from "react-router-dom"
import "./index.css"

const Details =()=>{
  const { status,id } = useParams();
  console.log(status, id)
  const navigate = useNavigate();
  const { Data, Ispending, Iserror } = useFetch('https://moises-subelemental-nonshrinkingly.ngrok-free.dev/TaskUploads/' + id)
  
const handledelete = () => {
  fetch(
    "https://moises-subelemental-nonshrinkingly.ngrok-free.dev/TaskUploads/" + Data.id,
    {
      method: "DELETE",
      headers: {
        "ngrok-skip-browser-warning": "true"
      }
    }
  ).then(() => {
    navigate("/");
  });
};

  return(
     <div className="TaskDetails">
      {Ispending && <div>Loading...</div>}
      {Iserror && <div>{Iserror}</div>}
      {Data && (
        <article>
          <h2>{Data.TaskName}</h2>
          <p>Status : {Data.Taskstatus}</p>
          <div>{Data.TaskDetails}</div>
        </article>)}
        {Data.Taskstatus !== "Completed" && (
          <button onClick={handledelete}>Delete</button>
        )}
       {Data.Taskstatus !== "Completed" && (
          <button onClick={() => navigate(`/homepage/${Data.Taskstatus}/edit/${id}`)}>
          Edit Task </button>)}
          
      
      </div>
  )
}

export default Details