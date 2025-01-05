import { BrowserRouter, Routes, Router } from "react-router-dom";
import "./assets/styles/styles.scss";
import Hello from "./components/Hello"; //import par defaut
import { Greeting } from "./components/greeting"; //import nommer

function App() {
  return (
    <>
      <Hello />
      <Greeting name="Jean" age={20} />
    </>
  );
}

export default App;
