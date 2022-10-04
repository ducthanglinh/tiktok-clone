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
      console.log(window.scrollY);
      if (window.scrollY >= 200) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  console.log("Re-render");
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

      {showGoToTop && (
        <button
          style={{
            position: "fixed",
            right: 10,
            bottom: 30,
          }}
          onClick={() => {
            window.scrollTo(0);
          }}
        >
          Top
        </button>
      )}
    </div>
  );
}
export default Content;
