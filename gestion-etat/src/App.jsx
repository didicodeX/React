import { useEffect, useRef } from "react";

import "./styles.css";

function App() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  useEffect(() => {
    document.title = "Didicode";
  },[])

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus input !</button>
      <button></button>
    </>
  );
}

export default App;
