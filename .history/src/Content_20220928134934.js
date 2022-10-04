import { useState, useEffect } from "react";

function Content() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log("Mounted or Re-render");

    return () => console.log("Cleanup");
  }, [count]);
  return (
    <div>
      <h1>{countdown}</h1>
    </div>
  );
}
export default Content;
