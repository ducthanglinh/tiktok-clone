import { useState } from "react";
const [job, setJob] = useState("");

const [jobs, setJobs] = useState([]);
function App() {
  return (
    <div style={{ padding: 30 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick="handleAdd">Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
