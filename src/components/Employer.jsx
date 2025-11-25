import { useState } from "react";

export default function Employer({ addJob }) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [skills, setSkills] = useState("");
  const [location, setLocation] = useState("");
  const [accessNeed, setAccessNeed] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newJob = {
      title,
      company,
      skills: skills.split(",").map((s) => s.trim().toLowerCase()),
      accessNeed,
      location,
    };

    addJob(newJob); 

    alert("Job Added Successfully!");
    setTitle("");
    setCompany("");
    setSkills("");
    setLocation("");
    setAccessNeed("");
  }

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center" }}>Employer - Add Job</h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "10px", borderRadius: "8px", border: "1px solid #aaa" }}
          required
        />

        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={{ padding: "10px", borderRadius: "8px", border: "1px solid #aaa" }}
          required
        />

        <input
          type="text"
          placeholder="Skills (comma separated: html, css, react)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          style={{ padding: "10px", borderRadius: "8px", border: "1px solid #aaa" }}
          required
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ padding: "10px", borderRadius: "8px", border: "1px solid #aaa" }}
          required
        />

        <select
          value={accessNeed}
          onChange={(e) => setAccessNeed(e.target.value)}
          style={{ padding: "10px", borderRadius: "8px", border: "1px solid #aaa" }}
          required
        >
          <option value="">Accessibility Support</option>
          <option value="screen reader">Screen Reader</option>
          <option value="big text">Big Text</option>
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
            cursor: "pointer",
          }}
        >
          Add Job
        </button>
      </form>
    </div>
  );
}
