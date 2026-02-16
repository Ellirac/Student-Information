import React, { useState } from "react";

export default function Student({ student, onClick }) {
  const [showEmail, setShowEmail] = useState(false);

  const accent = `hsl(${((student.id || 1) * 47) % 360} 70% 55%)`;

  return (
    <div
      onClick={() => onClick?.(student)}
      style={{
        border: "1px solid #e5e7eb",
        padding: "20px",
        borderRadius: "12px",
        background: "white",
        cursor: onClick ? "pointer" : "default",
        width: "320px",
        minHeight: "140px",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      onMouseEnter={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.12)";
          e.currentTarget.style.borderColor = accent;
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
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "12px",
            background: `linear-gradient(135deg, ${accent}, ${accent}dd)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: "18px",
            color: "#fff",
            boxShadow: `0 4px 12px ${accent}40`,
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

      <div style={{ marginTop: "16px" }}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowEmail((s) => !s);
          }}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            border: "1px solid #e5e7eb",
            background: "#f9fafb",
            color: "#374151",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#f3f4f6";
            e.target.style.borderColor = "#d1d5db";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "#f9fafb";
            e.target.style.borderColor = "#e5e7eb";
          }}
        >
          {showEmail ? "Hide Email" : "Show Email"}
        </button>
        {showEmail && (
          <p
            style={{
              marginTop: "12px",
              marginBottom: 0,
              color: "#4b5563",
              fontSize: "14px",
              lineHeight: 1.5,
              animation: "fadeIn 0.2s ease-out",
            }}
          >
            <strong style={{ color: "#1f2937" }}>Email:</strong> {student.email}
          </p>
        )}
      </div>
    </div>
  );
}
