import React from "react";

export default function StudentCard({ student, onClick }) {
  const color = `hsl(${((student.id || 1) * 47) % 360} 70% 55%)`;
  return (
    <div
      className="student-card"
      onClick={() => onClick?.(student)}
      style={{
        borderRadius: "12px",
        cursor: onClick ? "pointer" : "default",
        padding: "20px",
        boxSizing: "border-box",
        background: "white",
        border: "1px solid #e5e7eb",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        width: "320px",
        minHeight: "110px",
      }}
      onMouseEnter={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.12)";
          e.currentTarget.style.borderColor = color;
        }
      }}
      onMouseLeave={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.08)";
          e.currentTarget.style.borderColor = "#e5e7eb";
        }
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "12px",
            background: `linear-gradient(135deg, ${color}, ${color}dd)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: "18px",
            color: "#fff",
            boxShadow: `0 4px 12px ${color}40`,
            flexShrink: 0,
          }}
        >
          {String(student.name || "")
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </div>
        <div style={{ flex: 1, textAlign: "left", minWidth: 0 }}>
          <h3
            style={{
              margin: 0,
              fontSize: "18px",
              fontWeight: 600,
              color: "#1a1a1a",
              lineHeight: 1.3,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {student.name}
          </h3>
          <div
            style={{
              fontSize: "14px",
              color: "#6b7280",
              marginTop: "4px",
              fontWeight: 500,
            }}
          >
            {student.major} · {student.age}
          </div>
        </div>
      </div>
    </div>
  );
}
