import { useActionState, useEffect } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";


const url = `https://6a5d2cc50ad09982aef6f06e.mockapi.io/Teachers`

function AddTeachers({onTeacherAdded}) {
    const navigate=useNavigate()
  async function addMaster(oldData, inputData){
    let name = inputData.get("name") || "";
    let dept = inputData.get("department") || "";
    let desig = inputData.get("designation") || "";
    let dojoin = inputData.get("doj") || "";
   

    let regex = /^([0-2]?[1-9]|3[01])[\/.-](0?[1-9]|1[0-2])[\/.-]\d{2,4}$/;

    if (!name || !dept || !desig || !dojoin) {
      return { error: "All fields are required" };
    }

    if (name.length > 12) {
      return {
        error: "Name should not contain more than 12 characters",
        name,
        dept,
        desig,
        dojoin,
      };
    } else if (dept.length > 10) {
      return {
        error: "Department should not contain more than 10 characters",
        name,
        dept,
        desig,
        dojoin,
      };
    } else if (desig.length > 10) {
      return {
        error: "Designation should not contain more than 10 characters",
        name,
        dept,
        desig,
        dojoin,
      };
    } else if (!regex.test(dojoin)) {
      return {
        error: "Use slash '/' in between in Date of Joining",
        name,
        dept,
        desig,
        dojoin,
      };
    }



try{
const response=await fetch (url,{
    method:"POST",
    headers : {"Content-Type":"application/json"},
    body: JSON.stringify({
        name,department: dept, designation: desig, doj: dojoin,
    }),
});
if (!response.ok){
    throw new Error("Failed to save Teacher")
}
const data = await response.json()
if(onTeacherAdded){
    onTeacherAdded(data)
}
return {message:"Teacher Added Successfully"}
}
 catch (err) {
    return{error:"Failed to add Teacher"}
}
  }


  const [data, action, pending] = useActionState(addMaster,null);

useEffect(() => {
    if (data?.message) {
        navigate("/teachersData")
    }
    },[data, navigate])


  return (
    <div className="form-container">
      <div className="form-card">
        <h1 className="form-title">Add Teacher</h1>

        {data?.message && (
          <div className="alert alert-success">{data?.message}</div>
        )}
        {data?.error && <div className="alert alert-error">{data?.error}</div>}

        <form action={action} className="teacher-form">
          <div className="form-group">
            <input
              type="text"
              defaultValue={data?.name}
              name="name"
              placeholder="Enter your Name"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              defaultValue={data?.dept}
              name="department"
              placeholder="Enter your Department"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              defaultValue={data?.desig}
              name="designation"
              placeholder="Enter your Designation"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              defaultValue={data?.dojoin}
              name="doj"
              placeholder="Date of Joining"
            />
          </div>

          <button type="submit" className="submit-btn" disabled={pending}>
            {pending ? "Adding Teacher..." : "Add Teacher"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTeachers;
