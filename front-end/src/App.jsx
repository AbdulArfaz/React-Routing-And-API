import Navbar from "./Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import StudentData from "./StudentData.jsx";
import Home from "./Home.jsx";
import EditStu from "./EditStu.jsx";
import AddStudent from "./AddStudent.jsx";
import { Toaster } from "react-hot-toast";
import AddTeachers from "./AddTeachers.jsx";
import { lazy, Suspense } from "react";
import { useState } from "react";
const TeachersData = lazy(() => import("./TeachersData.jsx"));
import LoginPage from "./LoginPage.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isAdminLoggedIn") === "true";
  });

  const handleLoginSuccess = () => {
    localStorage.setItem("isAdminLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div>
      <Toaster position="top-right" />

      <div className="logout-bar">
        <button className="logout-btn" onClick={handleLogout}>
          Log Out
        </button>
      </div>

      <Suspense fallback={<h2>Loading Teachers Data</h2>}>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/addTeachers" element={<AddTeachers />} />
            <Route path="/teachersdata" element={<TeachersData />} />
            <Route path="/addStudent" element={<AddStudent />} />
          </Route>

          <Route path="/studentdata" element={<StudentData />} />
          <Route path="/edit/:id" element={<EditStu />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
