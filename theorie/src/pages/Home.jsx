import React from "react";
import Button from "../components/Button";
import { useState } from "react";
import Compteur from "../components/Compteur";

const Home = () => {
  const [count, setCount] = useState(0);
  const handleClick = (e) => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Accueil</h1>
      <button onClick={handleClick}>Submit {count} </button>
      <Button onPouet={handleClick} />
      <Compteur count={count}/>
    </div>
  );
};

export default Home;

/**
 * on n'ecoute pas d'evenement directement sur le composant
 * onPouet ici est considerer comme une propriete que je recupere dans mon composant et que je passe a onclick qui est fais sur un vrai button
 *
 * useState
 * premier élément du tableau est la valeur, le second une fonction pour modifier la valeur (setter).
 * var1: ce qu'on veut memorise || variable d'etat
 * var2: la fonction qui vas permettre de modifer cette variable
 * [var1, var2]
 */
