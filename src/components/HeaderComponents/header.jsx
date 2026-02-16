import React from "react";
import { Link } from "react-router-dom";

export default function HeaderComponent() {
  return (
    <header className="site-header">
      <div className="brand-section">
        <h1 className="brand">Scholar Portal</h1>
        <span className="tag">Student Information System</span>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/students">Students</Link>
      </nav>
    </header>
  );
}
