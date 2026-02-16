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
      <div className="detail-container">
        <div className="loading-state">Loading student...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="detail-container">
        <div className="error-state">Error: {error}</div>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="detail-container">
        <div className="error-state">No student found.</div>
      </div>
    );
  }

  const accent = `hsl(${((student.id || 1) * 47) % 360} 70% 55%)`;

  return (
    <div className="detail-container">
      <div className="detail-card">
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "16px",
            background: `linear-gradient(135deg, ${accent}, ${accent}dd)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: "32px",
            color: "#fff",
            boxShadow: `0 8px 24px ${accent}40`,
            marginBottom: "24px",
          }}
        >
          {String(student.name || "")
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </div>

        <h2
          style={{
            margin: "0 0 24px 0",
            fontSize: "32px",
            fontWeight: 700,
            color: "#1a1a1a",
          }}
        >
          {student.name}
        </h2>

        <div className="detail-info">
          <div className="info-item">
            <strong>Age:</strong>
            <span>{student.age}</span>
          </div>
          <div className="info-item">
            <strong>Major:</strong>
            <span>{student.major}</span>
          </div>
          <div className="info-item">
            <strong>Email:</strong>
            <span>{student.email}</span>
          </div>
        </div>

        <Link to="/" className="back-link">
          ← Back to list
        </Link>
      </div>
    </div>
  );
}
