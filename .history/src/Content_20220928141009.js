import { useState, useEffect } from "react";

function Content() {
  const [avt, setAvt] = useState();
  const handlePreviewAvt = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };
  return (
    <div>
      <input type="file" onChange={handlePreviewAvt}></input>
    </div>
  );
}
export default Content;
