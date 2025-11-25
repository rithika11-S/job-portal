export default function Recommentation({ seeker, jobs }) {
  if (!seeker) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>No seeker data found</h2>
        <p>Please go to the Job Seeker page and submit your details.</p>
      </div>
    );
  }

  function calculateScore(job, seeker) {
    let score = 0;

    if (seeker.skills && job.skills) {
      job.skills.forEach((skill) => {
        if (seeker.skills.includes(skill.toLowerCase())) {
          score += 1; 
        }
      });
    }

    return score;
  }


  const sortedJobs = jobs
    .map((job) => ({
      ...job,
      score: calculateScore(job, seeker),
    }))
    .sort((a, b) => b.score - a.score);

  return (
    <div className="recomend-container">
      <h2 className="recommend-title">Recommended Jobs for {seeker.name}</h2>

      {sortedJobs.map((job, index) => (
        <div
          key={index} className="job-card">
         
  
          <p className="job-detail"><strong>Company:</strong> {job.company}</p>
          <p className="job-detail"><strong>Skills Required:</strong> {job.skills.join(", ")}</p>
          <p className="job-detail"><strong>Location:</strong> {job.location}</p>
          <p className="job-detail"><strong>Accessibility Avaibable:</strong>{job.accessNeed}</p>
          <p className="score-chip"><strong>Match Score:</strong> {job.score}</p>
        </div>
      ))}
    </div>
  );
}
