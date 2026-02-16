import React from "react";

export default function StudentCard({ student, onClick }) {
  const color = `hsl(${((student.id || 1) * 47) % 360} 70% 55%)`;
  const initials = String(student.name || "")
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className="student-card"
      onClick={() => onClick?.(student)}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick(student);
        }
      }}
    >
      <div className="avatar" style={{ background: color }} aria-hidden="true">
        {initials}
      </div>

      <div className="info">
        <div className="student-name">{student.name}</div>
        <div className="details">
          <span>{student.major}</span>
          <span>•</span>
          <span>Age {student.age}</span>
        </div>
      </div>
    </div>
  );
}
