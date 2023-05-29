import React from "react";
import "./App.css";
import { getAllPokemonData } from "./api/service";

function App() {
  const [pokemonData, setPokemonData] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const data = await getAllPokemonData();
      setPokemonData(data.results);
    })();
  }, []);
  return (
    <div className="App">
      <h1>Pokemons</h1>
      {pokemonData?.map((poke, i) => {
        return (
          <div key={i}>
            <h3>{poke.name}</h3>
            <img
              src={`https://img.pokemondb.net/artwork/large/${poke.name}.jpg`}
              alt="pokemon"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
