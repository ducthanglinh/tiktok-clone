import { useState, useEffect } from "react";

const tabs = ["posts", "comments", "albums"];
function Content() {
  const [title, setTitle] = useState("");
  const [posts, setposts] = useState([]);
  const [type, setType] = useState("posts");
  console.log(type);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/" + type)
      .then((res) => res.json())
      .then((posts) => {
        setposts(posts);
      });
  }, []);
  return (
    <div>
      {tabs.map((tab, index) => (
        <button key={index} onClick={() => setType(tab)}>
          {tab}
        </button>
      ))}
      {/* <input value={title} onChange={(e) => setTitle(e.target.value)} /> */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Content;
