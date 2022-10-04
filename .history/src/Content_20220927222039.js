import { useState, useEffect } from "react";

function Content() {
  const [title, setTitle] = useState("");
  const [posts, setposts] = useState([]);
  useEffect(() => {
    document.title = title;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        setposts(posts);
      }, []);
  });
  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => {
          <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}
export default Content;
