import { Activity, useState } from "react"
import "./Home.css";

export default function Home(){

const[homepage,setHomePage]=useState(true)

    return(
        <div className="home-page-wrapper">
            <div className="card">
                <nav className="nav-buttons">
             <button onClick={()=>setHomePage(true)}>Home</button>
             <button  onClick={()=>setHomePage(false)}>Student LogIn</button>
             </nav>

             <div className="content-area">
             <Activity mode={homepage==true?'visible':'hidden'}>
                <div className="home-message">
                <p>Welcome to the Home Page</p>
                </div>
             </Activity>

             <Activity mode={homepage==false?'visible':'hidden'}>
                <StudentForm />
             </Activity>
        </div>
        </div>
        </div>
    )
}

function StudentForm(){
    return(
      <form className="form-container" onSubmit={(e) => e.preventDefault()}>
      <h2>Student Login</h2>
      
      <div className="input-group">
        <label>Enrollment Number</label>
        <input type="text" placeholder="Enter Enrollment Number" />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input type="password" placeholder="Enter Password" />
      </div>

      <button type="submit" className="submit-btns">Login</button>
    </form>
    )
}