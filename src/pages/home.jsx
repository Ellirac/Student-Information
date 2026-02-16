import React from "react";

export default function Home() {
  return (
    <div className="container">
      <section className="intro" aria-label="introduction">
        <h2 className="intro-title">Welcome to Students Information</h2>
        <p className="intro-lead">
          This demo application showcases component usage, props & state,
          client-side routing, and basic API integration. Use the Students tab
          to explore private (local) and public (API) student lists. Each card
          reveals additional information when interacted with.
        </p>

        <div className="intro-grid" role="list">
          <div className="intro-card" role="listitem">
            <div className="intro-icon">📚</div>
            <h3>Purpose</h3>
            <p className="muted">
              Showcase a small SPA architecture suitable for learning React
              fundamentals and best practices.
            </p>
          </div>

          <div className="intro-card" role="listitem">
            <div className="intro-icon">⚙️</div>
            <h3>How it works</h3>
            <p className="muted">
              Local JSON provides private students; JSONPlaceholder API
              demonstrates fetching public data.
            </p>
          </div>

          <div className="intro-card" role="listitem">
            <div className="intro-icon">🚀</div>
            <h3>Try it</h3>
            <p className="muted">
              Click Students → Public (API) and then select a card to see
              details. Use search on Private to filter.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
