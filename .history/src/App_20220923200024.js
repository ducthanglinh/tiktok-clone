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
  const [checked, setChecked] = useState([]);
  const handleCheck = (id) => {
    setChecked((prev) => [...prev, checked]);
  };

  const handleSubmit = () => {
    console.log({ id: checked });
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked === course.id}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Lay thuong</button>
    </div>
  );
}

export default App;
