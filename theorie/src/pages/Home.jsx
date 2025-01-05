import React from "react";

const Home = () => {
  const handleClick = () => {
    console.log("click")
  }

  return (
    <div>
      <h1>Accueil</h1>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Home;
