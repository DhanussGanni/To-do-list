import Header from './Header.js'
import Addon from './Addon.js'
import './index.css'
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom'
import Homepage from './Homepage.js'
import Details from './TaskDetails.js'
import Edittask from "./EditTask.js"


function App() {
  return (
    <Router>
    <div className="content">
      <Header />
      <div className="navbar"> 
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage/New Task" element={<Addon />} />
          <Route path="/taskname/:status/:id" element={<Details />} />
          <Route path="//homepage/:status/edit/:id" element={<Edittask />} />
        </Routes>
      </div>
      
    </div>
    </Router>
  )
}

export default App;
