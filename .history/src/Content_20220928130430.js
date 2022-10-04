import { useState, useEffect } from "react";

function Content() {
  const [countdown, setCountDown] = useState(180);
  useEffect(() => {
    setInterval(() => setCountDown((prev) => prev - 1), 1000);
  }, []);
  return (
    <div>
      <h1>{countdown}</h1>
    </div>
  );
}
export default Content;
