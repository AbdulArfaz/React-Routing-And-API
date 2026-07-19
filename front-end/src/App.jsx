import Navbar from "./Navbar"
import './App.css'
import {Routes,Route} from 'react-router-dom'
import About from "./About"
import StudentData from "./StudentData.jsx"
import Home from "./Home.jsx"
import EditStu from "./EditStu.jsx"
import AddStudent from "./AddStudent.jsx"
import {Toaster} from 'react-hot-toast'

function App() {
 

  return (
   <div>
   
    <Toaster position="top-right" />

    <Routes>
      <Route element={<Navbar />}>
      
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      
      
      </Route>

    <Route path="/studentdata" element={<StudentData />} />
    <Route path="/edit/:id" element={<EditStu />} />
    
    <Route path="/addStudent" element={<AddStudent />} />
    
    </Routes>
   
   </div>
  )
}

export default App
