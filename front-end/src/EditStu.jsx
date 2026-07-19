import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import {useFormStatus} from 'react-dom';

function EditStu(){
    const {id} = useParams()

    const[rollNo,setRollno]=useState('')
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[grade,setGrade]=useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        getStuData()
    },[])

   const getStuData= async ()=>{
    const url = `https://my-json-server.typicode.com/AbdulArfaz/React-Routing-And-API/studentdata`
    let response = await fetch (url)
    let data = await response.json()
    console.log(data);
    
    setRollno(data.rollNo)
    setFirstName(data.firstName)
    setLastName(data.lastName)
    setGrade(data.grade)
   }
 
   const updateStudentDetails = async ()=>{
    const url = `https://my-json-server.typicode.com/AbdulArfaz/React-Routing-And-API/studentdata`;
    let response = await fetch (url,{
        method:'Put',
        body:JSON.stringify({rollNo,firstName,lastName,grade})
    })
    let data = response.json()

    if(data){
        alert("Student Details Updated")
        navigate('/studentdata')
    }
   }


   function SubmitButton(){
    const {pending} = useFormStatus();

    return(
        <button type="submit" className="submit-btn" disabled={pending}>
            {pending ? 'Updating...' : "Update Student Details"}
        </button>
    )
   }



    return(
        <form action={updateStudentDetails} className="edit-form">
              <h1>Edit Student Details</h1>
             
           <input type="text" className="form-input" onChange={(e)=>setRollno(e.target.value)} value={rollNo || ''} placeholder="Edit Roll No" />
            <br /><br />
            <input type="text"  className="form-input" onChange={(e)=>setFirstName(e.target.value)} value={firstName || ''} placeholder="Edit First Name" />
            <br /><br />
            <input type="text"  className="form-input" onChange={(e)=>setLastName(e.target.value)} value={lastName || ''} placeholder="Edit Last Name" />
            <br /><br />
            <input type="text"  className="form-input" onChange={(e)=>setGrade(e.target.value)} value={grade || ''} placeholder="Edit Grade" />
            <br /><br />

            <SubmitButton />

        </form>
            
          
            

       
    )
}
export default EditStu