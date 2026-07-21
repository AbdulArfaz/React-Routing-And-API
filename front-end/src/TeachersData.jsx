import { useEffect, useState } from "react";
import {toast} from 'react-hot-toast'

const url= "https://6a5d2cc50ad09982aef6f06e.mockapi.io/Teachers";

export default function TeachersData({ refreshTrigger }) {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const teachersDb = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTeachers(data);
    } catch (error) {
      console.error("Error loading teachers:", error);
    } finally {
      setLoading(false);
    }
  };

  const delTeacherDb = async (id) =>{
   let response = await fetch (url+"/"+id,{
    method:'delete'
   })
   let data = response.json()
   if(response.ok && data){
    toast.success('Teacher data deleted')
     setTeachers(prevTeachers => prevTeachers.filter(i => String(i.id).trim() !== String(id).trim()))
   }
  }

  useEffect(() => {
    teachersDb();
  }, [refreshTrigger]);

  if (loading) return <p>Loading teachers from database...</p>;

  return (
    <div className="teachers-list-card">
      <h2>Registered Teachers ({teachers.length})</h2>
      {
        loading ? (
          <p> Loading teachers from database...</p>
        ) : teachers.length ===  0 ?
(
  <p>No teachers found in database.</p>
) : (
       <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Designation</td>
            <td>Department</td>
            <td>Date of Joining</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {teachers.map((i)=>(
            <tr key={i.id}>
              <td>{i.name}</td>
              <td>{i.designation}</td>
              <td>{i.department}</td>
              <td>{i.doj}</td>
              <td><button onClick={()=>delTeacherDb(i.id)}>Delete</button></td>
            </tr>
          ))
          }
        </tbody>
       </table>
)}

    </div>
  );
}