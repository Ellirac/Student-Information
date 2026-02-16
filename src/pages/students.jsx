import React, { useEffect, useState } from "react";
import { fetchStudent } from "../api/student_api";
import { useParams, Link } from "react-router-dom";

export default function StudentDetail() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    fetchStudent(id)
      .then((s) => mounted && setStudent(s))
      .catch((err) => mounted && setError(err.message))
      .finally(() => mounted && setLoading(false));
    return () => (mounted = false);
  }, [id]);

  if (loading) {
    return (
      <div className="container">
        <div className="loading-state">
          <p>Loading student details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="error-state">
          <p>Error: {error}</p>
          <Link
            to="/students"
            className="back-link"
            style={{ marginTop: "var(--space-lg)" }}
          >
            ← Back to Students
          </Link>
        </div>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="container">
        <div className="loading-state">
          <p>No student found.</p>
          <Link
            to="/students"
            className="back-link"
            style={{ marginTop: "var(--space-lg)" }}
          >
            ← Back to Students
          </Link>
        </div>
      </div>
    );
  }

  const color = `hsl(${((student.id || 1) * 47) % 360} 70% 55%)`;
  const initials = String(student.name || "")
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="container detail-container">
      <div className="detail-card">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-lg)",
            marginBottom: "var(--space-xl)",
          }}
        >
          <div
            style={{
              background: color,
              width: "80px",
              height: "80px",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display)",
              fontSize: "1.75rem",
              color: "white",
              boxShadow: "var(--shadow-md)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2), transparent)",
              }}
            />
            {initials}
          </div>

          <div>
            <h2 style={{ marginBottom: "4px" }}>{student.name}</h2>
            <p style={{ color: "var(--text-secondary)", margin: 0 }}>
              Student Profile
            </p>
          </div>
        </div>

        <div className="detail-info">
          <p>
            <strong>Age:</strong> {student.age} years old
          </p>
          <p>
            <strong>Major:</strong> {student.major}
          </p>
          <p>
            <strong>Email:</strong> {student.email}
          </p>
          <p>
            <strong>Student ID:</strong> #{student.id}
          </p>
        </div>

        <Link to="/students" className="back-link">
          ← Back to Students
        </Link>
      </div>
    </div>
  );
}
