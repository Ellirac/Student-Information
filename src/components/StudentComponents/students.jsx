import React, { useState } from "react";

export default function Student({ student, onClick }) {
  const [showEmail, setShowEmail] = useState(false);
  const color = `hsl(${((student.id || 1) * 47) % 360} 70% 55%)`;
  const initials = String(student.name || "")
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className="student-component"
      onClick={() => onClick?.(student)}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-md)",
        }}
      >
        <div
          className="avatar"
          style={{
            background: color,
            width: "64px",
            height: "64px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-display)",
            fontSize: "1.25rem",
            color: "white",
            boxShadow: "var(--shadow-sm)",
            position: "relative",
            overflow: "hidden",
          }}
          aria-hidden="true"
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

        <div style={{ flex: 1 }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: "1.125rem",
              color: "var(--accent-primary)",
              marginBottom: "4px",
            }}
          >
            {student.name}
          </div>
          <div
            style={{
              fontSize: "0.875rem",
              color: "var(--text-secondary)",
              display: "flex",
              gap: "var(--space-sm)",
              alignItems: "center",
            }}
          >
            <span>{student.major}</span>
            <span>•</span>
            <span>Age {student.age}</span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "var(--space-md)" }}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowEmail((s) => !s);
          }}
        >
          {showEmail ? "🔒 Hide Email" : "📧 Show Email"}
        </button>

        {showEmail && (
          <div className="email-section">
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.875rem",
                margin: 0,
              }}
            >
              <strong>Email:</strong> {student.email}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
