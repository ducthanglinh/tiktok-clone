import { useState, useEffect } from "react";

function Content() {
  const [width, setWidth] = useState(window.innerWidth);
  return (
    <div>
      <h1>{width}</h1>
    </div>
  );
}
export default Content;
