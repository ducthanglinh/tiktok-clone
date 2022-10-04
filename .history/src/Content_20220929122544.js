import { useState, useEffect } from "react";
const lesson = [
  {
    id:1,
    name: "Javascript"
  },
  {
    id:2,
    name: 'PHP'
  },
  {
    id:3,
    name: "Golang"
  }
]
function Content() {
 const 
  return (
    <div>
      <input type="file" onChange={handlePreviewAvt}></input>
      {avt && <img src={avt.preview} alt="avt" width="70%" />}
    </div>
  );
}
export default Content;
