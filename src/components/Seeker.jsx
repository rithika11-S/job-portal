
import { useState } from "react";

export default function Seeker({ onSubmit }) {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [accessNeed, setAccessNeed] = useState("");

  
  function startListeningName(setFunction) {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();
    recognition.onresult = (event) => {
      let spoken = event.results[0][0].transcript;
      setFunction(spoken);
    };
  }


  function startListeningSkills(setFunction) {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();
    recognition.onresult = (event) => {
      let spoken = event.results[0][0].transcript.toLowerCase().trim();

      console.log("Speech Skills:", spoken);

      
      spoken = spoken.replace(/\s+/g, ", ");

      setFunction((prev) => prev + spoken + ", ");
    };
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({
      name,
      skills: skills
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s.length > 0),
      accessNeed: accessNeed.toLowerCase(),
    });
  }

  return (
    <div style={{
      padding: "20px",
      maxWidth: "500px",
      margin: "0 auto",
      textAlign: "left"
    }}>
      <h2 style={{ textAlign: "center" }}>Job Seeker Form</h2>

      <form onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          marginTop: "20px"
        }}
      >

        {/* NAME FIELD */}
        <label style={{ fontWeight: "bold" }}>Full Name</label>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            aria-label="Enter your name"
            onChange={(e) => setName(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #aaa"
            }}
          />
          <button
            type="button"
            onClick={() => startListeningName(setName)} 
            style={{
              padding: "10px 12px",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            🎤
          </button>
        </div>

        {/* SKILLS FIELD */}
        <label style={{ fontWeight: "bold" }}>Skills (Speak normally)</label>
        <p style={{ fontSize: "12px", color: "gray", margin: 0 }}>
          Example: say — html css javascript react
        </p>

        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            value={skills}
            placeholder="html, css, react"
            aria-label="Enter your skills"
            onChange={(e) => setSkills(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #aaa"
            }}
          />
          <button
            type="button"
            onClick={() => startListeningSkills(setSkills)} 
            style={{
              padding: "10px 12px",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            🎤
          </button>
        </div>

        {/* ACCESSIBILITY DROPDOWN */}
        <label style={{ fontWeight: "bold" }}>Accessibility Need</label>
        <select
          value={accessNeed}
          onChange={(e) => setAccessNeed(e.target.value)}
          aria-label="Select accessibility type"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #aaa"
          }}
        >
          <option value="">Select</option>
          <option value="screen reader">Screen Reader</option>
          <option value="big text">Big Text</option>
          <option value="voice input">Voice Input</option>
          <option value="remote work">Remote Work</option>
          <option value="wheelchair access">Wheelchair Access</option>
        </select>

        <button
          type="submit"
          style={{
            padding: "12px",
            borderRadius: "8px",
            background: "#007bff",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Find Recommended Jobs
        </button>
      </form>
    </div>
  );
}
