import { useState, useEffect } from "react";

const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];
function Content() {
  const [title, setTitle] = useState("");
  const [posts, setposts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);
  console.log(type);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setposts(posts);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.screenX);
      if (window.screenX >= 200) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
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
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default Content;
