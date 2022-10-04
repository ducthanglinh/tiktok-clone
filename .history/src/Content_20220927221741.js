import { useState, useEffect } from "react";

function Content() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = title;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        console.log(posts);
      });
  });
  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
}
export default Content;
