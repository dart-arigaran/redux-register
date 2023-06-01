import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Employee_details from "./components/Employee_details";
import No_Page from "./components/No_Page";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import Add_Employee from "./components/Pages/Add_Employee";
import Update_Employee from "./components/Pages/Update_Employee";
import View from "./components/Pages/View";
import Model from "./components/Pages/Model";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/details" element={<Employee_details />} />
            <Route path="/addemployee" element={<Add_Employee />} />
            <Route path="/updateemployee/:id" element={<Update_Employee />} />
            <Route path="/viewemployee/:id" element={<View />} />
            <Route path="/model" element={<Model />} />

            <Route path="*" element={<No_Page />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
