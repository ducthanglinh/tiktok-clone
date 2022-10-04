import { useState } from "react";

function App() {
  const storageJobs = JSON.parse(localStorage.getItem("jobs"));
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(storageJobs);
  const handleAdd = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      const jsonJob = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJob);

      return newJobs;
    });
    setJob("");
  };
  console.log(job);
  return (
    <div style={{ padding: 30 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
