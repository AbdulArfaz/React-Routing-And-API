import { useState } from "react"
import { useNavigate } from "react-router"
import {toast} from 'react-hot-toast'

function AddStudent(){

      const[rollNo,setRollno]=useState('')
        const[firstName,setFirstName]=useState('')
        const[lastName,setLastName]=useState('')
        const[grade,setGrade]=useState('')
        const navigate = useNavigate()

         //validation
        const[nameErr,setNameErr]=useState()
        const[lastnameErr,setLastnameErr]=useState()
        const[rollNoErr,setRollnoErr]=useState('')
        const[gradeErr,setGradeErr]=useState('')

        const handleName=(e)=>{
        if(e.target.value.length>8){
            setNameErr("only 8 characters allowed")
        }else{
            setNameErr('')
        }
        }

        const handlelastName=(e)=>{
        if(e.target.value.length>8){
         setLastnameErr("only 8 characters allowed")
        }else{
            setLastnameErr('')
        }
        }

        const handleRollno=(e)=>{
            let regex = /^\d*$/;
            if(regex.test(e.target.value)){
                setRollnoErr('')
            }else{
                setRollnoErr("Please Enter only Numerical inputs")
            }
        }

         const handleGrade=(e)=>{
            let regex = /^\d*$/;
            if(regex.test(e.target.value)){
                setGradeErr('')
            }else{
                setGradeErr("Please Enter only Numerical inputs")
            }
        }



const addStu = async () =>{
    const url =`https://6a5d2cc50ad09982aef6f06e.mockapi.io/studentdata`;
    let response = await fetch (url,{
       method:'POST',
       headers: {
        'Content-Type': 'application/json'
       },
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
            <input type="text" className="add-input" onChange={(e)=>{setRollno(e.target.value);handleRollno(e)}} placeholder="Enter Roll No" />
            <span className="rollNoErr">{rollNoErr}</span>
            <br /><br />

             <input type="text" className="add-input" onChange={(e)=>{setFirstName(e.target.value);handleName(e)}} placeholder="Enter First Name" />
            <span className="nameErr">{nameErr}</span>
            <br /><br />

             <input type="text" className="add-input" onChange={(e)=>{setLastName(e.target.value);handlelastName(e)}} placeholder="Enter Last name" />
            <span className="nameErr">{lastnameErr}</span>
            <br /><br />

             <input type="text" className="add-input" onChange={(e)=>{setGrade(e.target.value);handleGrade(e)}} placeholder="Enter Grade" />
            <span className="rollNoErr">{gradeErr}</span>
            <br /><br />

            <button disabled={!!(rollNoErr || nameErr || lastnameErr || gradeErr)} className="addstudent-btn" onClick={addStu}>Add New Student</button>

            
        </div>
    )

}
export default AddStudent;