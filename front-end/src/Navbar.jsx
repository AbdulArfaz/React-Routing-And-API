import {NavLink, Outlet} from 'react-router-dom'

function Navbar(){
    return(
       <div>
        <div className="navbar">
           <div className="nav-img">
              <img src="https://png.pngtree.com/png-clipart/20250104/original/pngtree-cute-school-cartoon-png-image_20081681.png" alt="school" />
           </div>
           <ul className="nav-list">
           <NavLink to="/about "className="list"><li>About Us</li></NavLink> 
           <NavLink to="/home" className="list"> <li>Home</li></NavLink>
           <NavLink to="/studentdata" className="list"><li>Students Data</li></NavLink>
           <NavLink to="/addStudent" className="list"><li>Add Student</li></NavLink>
           
           </ul>
                  
               
        </div>
        <Outlet />
</div>
    )
}
export default Navbar