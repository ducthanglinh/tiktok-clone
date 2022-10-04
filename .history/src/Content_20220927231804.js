import { useState, useEffect } from "react";

function Content() {
  const [widht, setWidth] = useState(window.innerWidth);
  return (
    <div>
      <h1>{widht}</h1>
    </div>
  );
}
export default Content;
