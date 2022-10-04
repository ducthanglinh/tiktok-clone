import { useState, useEffect } from "react";

function Content() {
  //   const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // const handleResize = () => {
    //   setWidth(innerWidth);
    // };
    // window.addEventListener("resize", handleResize);

    console.log(window.innerWidth);
  }, []);
  return (
    <div>
      <h1>{width}</h1>
    </div>
  );
}
export default Content;
