import { Activity, useState } from "react"
import "./Home.css";

export default function Home(){

const[homepage,setHomePage]=useState(true)

    return(
        <div className="home-page-wrapper">
            <div className="card">
                <nav className="nav-buttons">
             <button className={homepage ? "active" : ""} onClick={()=>setHomePage(true)}>Teacher Login</button>
             <button className={!homepage ? "active" : ""} onClick={()=>setHomePage(false)}>Student Login</button>
             </nav>

             <div className="content-area">
             <Activity mode={homepage==true?'visible':'hidden'}>
               <TeachersForm />
             </Activity>

             <Activity mode={homepage==false?'visible':'hidden'}>
                <StudentForm />
             </Activity>
        </div>
        </div>
        </div>
    )
}
function TeachersForm(){
    return(
         <form className="form-container" onSubmit={(e) => e.preventDefault()}>
      <h2>Teacher Login</h2>
      
      <div className="input-group">
        <label>Teacher ID</label>
        <input type="text" placeholder="Enter Teacher ID" />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input type="password" placeholder="Enter Password" />
      </div>

      <button type="submit" className="submit-btns">Login</button>
    </form>
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