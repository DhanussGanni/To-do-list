import './index.css'
import {Link} from 'react-router-dom'
const Header = () => {
    return(
            <div className="header">
                <h1 className="title">Task Management</h1>
                <div className="nav-links">
                    <Link to='/'>Home</Link>
                    <Link to='/homepage/New Task'>New Task</Link>
                </div>
            </div>    
   )
}

export default Header