import { useState } from "react"
import { useNavigate } from "react-router"
import {toast} from 'react-hot-toast'

function AddStudent(){

      const[rollNo,setRollno]=useState('')
        const[firstName,setFirstName]=useState('')
        const[lastName,setLastName]=useState('')
        const[grade,setGrade]=useState('')
        const navigate = useNavigate()


const addStu = async () =>{
    const url =`https://my-json-server.typicode.com/AbdulArfaz/React-Routing-And-API/studentdata`;
    let response = await fetch (url,{
       method:'POST',
       body:JSON.stringify({rollNo,firstName,lastName,grade})
    })
    let data = await response.json()

    if(response.ok && data){
    toast.success('New Student Added Successfully')
    navigate("/studentdata")
}else{
    toast.error('Failed to add student')
    
}
}
    return(
        <div className="addstudent-div">
            <h1 className="add-title">Add New Student</h1>
            <input type="text" className="add-input" onChange={(e)=>setRollno(e.target.value)} placeholder="Enter Roll No" />
            <br /><br />

             <input type="text" className="add-input" onChange={(e)=>setFirstName(e.target.value)} placeholder="Enter First Name" />
            <br /><br />

             <input type="text" className="add-input" onChange={(e)=>setLastName(e.target.value)} placeholder="Enter Last name" />
            <br /><br />

             <input type="text" className="add-input" onChange={(e)=>setGrade(e.target.value)} placeholder="Enter Grade" />
            <br /><br />

            <button className="addstudent-btn" onClick={addStu}>Add New Student</button>

            
        </div>
    )

}
export default AddStudent;