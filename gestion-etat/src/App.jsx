import { useEffect, useState } from "react";

import "./styles.css";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  });

  return <p>{count}</p>;
}

function App() {
  return <Timer />;
}

//utiliser useMemo quand ca prend plus de 1ms
export default App;
