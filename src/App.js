import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dag", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}



function App() {
  // to build the rest of the component
    const [animals, setAnimals] = useState([]); // <-- useState here

    const handleClick = () => {
      setAnimals([...animals, getRandomAnimal()]); // <-- update state here
    };

    const renderedAnimals = animals.map((animal, index) => {
      return <AnimalShow key={index} type={animal} />;
    });

  return (
    <div className="app">
      <button onClick={handleClick}>
        Add Animal
      </button>
      <div className="animal-list">{renderedAnimals}</div>
      
    </div>
  );
}

export default App; // Don’t forget to export your component!