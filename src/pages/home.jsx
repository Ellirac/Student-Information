import React from "react";

export default function Home() {
  return (
    <div className="container">
      <div className="intro">
        <h1 className="intro-title">Welcome to Scholar Portal</h1>
        <p className="intro-lead">
          A comprehensive student information management system designed to
          streamline academic data access and organization. Explore student
          profiles, manage records, and integrate seamlessly with external data
          sources.
        </p>

        <div className="intro-grid">
          <div className="intro-card">
            <h3>Unified Dashboard</h3>
            <p>
              Access both private institutional data and public API integrations
              in one centralized interface. Seamlessly switch between data
              sources with our intuitive tabbed navigation.
            </p>
          </div>

          <div className="intro-card">
            <h3>Smart Search</h3>
            <p>
              Find students instantly with our powerful search functionality.
              Filter by name, major, or any attribute to quickly locate the
              information you need.
            </p>
          </div>

          <div className="intro-card">
            <h3>Detailed Profiles</h3>
            <p>
              View comprehensive student information including demographics,
              academic programs, and contact details. Click any card to reveal
              full profile information.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "var(--space-2xl)",
          padding: "var(--space-xl)",
          background: "var(--bg-elevated)",
          borderRadius: "16px",
          border: "1px solid var(--border-light)",
        }}
      >
        <h3
          style={{
            marginBottom: "var(--space-md)",
            color: "var(--accent-primary)",
          }}
        >
          Getting Started
        </h3>
        <ol
          style={{
            paddingLeft: "var(--space-lg)",
            color: "var(--text-secondary)",
            lineHeight: "1.8",
          }}
        >
          <li>
            Navigate to the <strong>Students</strong> page using the header menu
          </li>
          <li>
            Toggle between <strong>Private</strong> (local data) and{" "}
            <strong>Public API</strong> sources
          </li>
          <li>Use the search bar to filter students by name or attributes</li>
          <li>Click any student card to view their complete profile</li>
          <li>
            Explore email visibility toggles and detailed information modals
          </li>
        </ol>
      </div>
    </div>
  );
}
