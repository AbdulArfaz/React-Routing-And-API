import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router"
import {toast} from 'react-hot-toast'


export default function StudentData(){

const[student,getStudent]=useState([])
const[loading,setLoading]=useState(false)
const navigateToEdit = useNavigate()

useEffect(() =>{
    setLoading(true)
    getStudentData()
},[])



const getStudentData= async()=>{
 const url=`https://api.npoint.io/882f55005c1fac2beffb`
 let response = await fetch(url)
 let data = await response.json()
 getStudent(data)
 setLoading(false)
}



const deleteButton = async (id) =>{
    
const url = `https://api.npoint.io/882f55005c1fac2beffb`
let response = await fetch (url + "/"+id,{
    method:'delete'
})
let data = await response.json()
if(response.ok && data){
    toast.success('Student Deleted')
    getStudentData()
}
}

const editButton =(id)=>{
navigateToEdit("/edit/"+id)
}


   
    return (
        
        <div className="table-container">
           <NavLink className="back-btn" to="/">Go to Home Page</NavLink>
           <NavLink className="add-btn" to="/addStudent">Add Student</NavLink>


           <br/><br/>
           <h2>Student Data via API</h2>

            <table>
                <thead>
                    <tr>
                        <th>Roll No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Grade</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                </thead>
            <tbody>
            {
                !loading ? (
                    student.map((stu) =>(
                        <tr key={stu.id}>

                            <td>{stu.rollNo}</td>
                            <td>{stu.firstName}</td>
                            <td>{stu.lastName}</td>
                            <td>{stu.grade}</td>
                            <td><button className="delete-btn" onClick={()=>deleteButton(stu.id)}>Delete</button></td>
                            <td><button className="edit-btn" onClick={()=>editButton(stu.id)}>Edit</button></td>

                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4" className="loading-out">Loading Data...</td>
                    </tr>
                )}
                </tbody>
                </table>
        </div>
    )
}
