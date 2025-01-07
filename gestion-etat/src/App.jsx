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

/** Une Web API n’est pas le seul type d’API existant
 Tout à fait, par exemple, cela peut être une interface pour utiliser un logiciel ou un service tiers sur le Web. Une API est simplement une interface logicielle qui permet de connecter un logiciel ou un service à un autre logiciel ou service.
 */
export default App;
