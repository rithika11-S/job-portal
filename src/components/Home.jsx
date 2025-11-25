export default function Home() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">EchoHire</h1>
        <h2 className="hero-subtitle">Breaking Barriers to Employment</h2>

        <p className="hero-description">
          A voice-powered inclusive job platform designed for differently-abled individuals.
          Speak your skills, discover opportunities, and connect to jobs without barriers.
        </p>

        <div className="features">
          <span className="feature-tag">🎤 Voice Input</span>
          <span className="feature-tag">🧠 Smart Job Matching</span>
          <span className="feature-tag">♿ Accessibility Support</span>
          <span className="feature-tag">💼 Inclusive Hiring</span>
        </div>

        <button className="hero-btn">Start Your Journey 🚀</button>
      </div>
    </div>
  );
}
