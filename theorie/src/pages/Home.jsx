import React from "react";
import Button from "../components/Button";
import { useState } from "react";

const Home = () => {
  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("click : ", e);
  };
  function handleInput(e) {
    console.log("input", e);
  }
  function handleFocus(e) {
    console.log("focus", e);
  }

  return (
    <div>
      <h1>Accueil</h1>
      <input type="text" onFocus={handleFocus} onInput={handleInput} />
      <button onClick={handleClick}>Submit</button>
      <Button onPouet={handleClick} />
    </div>
  );
};

export default Home;

/**
 * on n'ecoute pas d'evenement directement sur le composant
 * onPouet ici est considerer comme une propriete que je recupere dans mon composant et que je passe a onclick qui est fais sur un vrai button
 * 
 * useState
 * var1: ce qu'on veut memorise || variable d'etat
 * var2: la fonction qui vas permettre de modifer cette variable
 * [var1, var2]
 */