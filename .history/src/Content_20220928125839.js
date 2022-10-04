import { useState, useEffect } from "react";

function Content() {
  const [countdown, setCountDown] = useEffect(180);
  return (
    <div>
      <h1>{countdown}</h1>
    </div>
  );
}
export default Content;
