import { useState, useEffect } from "react";

function Content() {
  const [avt, setAvt] = useState();

  useEffect(() => {
    return () => {
      avt && URL.revokeObjectURL();
    };
  }, [avt]);
  const handlePreviewAvt = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvt(file.preview);
  };
  return (
    <div>
      <input type="file" onChange={handlePreviewAvt}></input>
      {avt && <img src={avt.preview} alt="avt" width="70%" />}
    </div>
  );
}
export default Content;
