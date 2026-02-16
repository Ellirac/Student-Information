import React from "react";
import { Link } from "react-router-dom";

export default function HeaderComponent() {
  return (
    <header className="site-header">
      <div className="brand-container">
        <h1 className="brand">Student Information</h1>
        <p className="tag">Private students · Public API students</p>
      </div>
      <nav className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/students" className="nav-link">
          Students
        </Link>
      </nav>
    </header>
  );
}
