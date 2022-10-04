import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "Javascript",
  },
  {
    id: 2,
    name: "PHP",
  },
  {
    id: 3,
    name: "NodeJs",
  },
];
function App() {
  const [checked, setChecked] = useState();
  console.log(checked);
  const handleSubmit = () => {};

  return (
    <div className="App" style={{ padding: 20 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input type="radio" onChange={() => setChecked(course.id)} />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Lay thuong</button>
    </div>
  );
}

export default App;
