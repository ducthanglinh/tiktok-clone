import { useState, useEffect } from "react";

const tabs = ["posts", "comments", "albums"];
function Content() {
  const [title, setTitle] = useState("");
  const [posts, setposts] = useState([]);
  const [type, setType] = useState("posts");
  console.log(type);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((posts) => {
        setposts(posts);
      });
  }, [type]);
  return (
    <div>
      {tabs.map((tab, index) => (
        <button
          key={index}
          style={
            type === tab
              ? {
                  color: "#fff",
                  backgroundColor: "#333",
                }
              : {}
          }
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Content;
