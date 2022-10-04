import { useState, useEffect } from "react";

function Content() {
  const [title, setTitle] = useState("");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => {
      console.log(posts);
    });
  useEffect(() => {
    document.title = title;
  });
  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
}
export default Content;
