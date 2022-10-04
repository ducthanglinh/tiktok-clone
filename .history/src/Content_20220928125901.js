import { useState, useEffect } from "react";

function Content() {
  const [countdown, setCountDown] = useState(180);
  return (
    <div>
      <h1>{countdown}</h1>
    </div>
  );
}
export default Content;
