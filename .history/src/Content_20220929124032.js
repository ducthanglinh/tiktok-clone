import { useState, useEffect } from "react";
const lesson = [
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
    name: "Golang",
  },
];
function Content() {
  const [lessonid, setLessonId] = useState(1);
  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };
    window.addEventListener(`lesson-${lessonid}`, handleComment);
  }, [lessonid]);
  return (
    <div>
      <ul>
        {lesson.map((item) => (
          <li
            key={item.id}
            style={{
              color: lessonid === item.id ? "red" : "#333",
            }}
            onClick={() => setLessonId(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Content;
