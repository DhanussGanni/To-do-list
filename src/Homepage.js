import "./index.css";
import usefetch from './fetchdata.js'; // your custom hook
import Yello from "./Yettostart.js";
import InProgress from "./Inprogress.js"
import Completedones from "./Completed.js";

const Homepage = () => {
  const { Data, Ispending, Iserror } = usefetch("http://localhost:8000/TaskUploads");

  return (
    <>
      {Ispending && <div className="Loading">Loading...</div>}
      {Iserror && <div className="Error">Getting an error fetching the data</div>}

      {!Ispending && !Iserror && Data && (
        <div className="homepage">
          <div className="yts">
            <Yello indata={Data} />
          </div>

          <div className="inprogress">
            <InProgress indata={Data} />
          </div>

          <div className="Completed">
            <Completedones indata={Data} />
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;