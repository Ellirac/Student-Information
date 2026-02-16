import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import StudentDetail from "./pages/student_details";
import Students from "./pages/students";
import HeaderComponent from "./components/HeaderComponents/header";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <HeaderComponent />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/:id" element={<StudentDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
