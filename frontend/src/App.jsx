import React from "react";
import UserDash from "./components/UserDash";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import Login from "./components/Login";
import { CareerForm } from "./components/CareerForm";
import { CareerOpportunities } from "./components/CareerOpportunities";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/userdash" element={<UserDash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/careerform" element={<CareerForm />} />
        <Route path="/careeroppo" element={<CareerOpportunities />} />
      </Routes>
    </Router>
  )
}

export default App;