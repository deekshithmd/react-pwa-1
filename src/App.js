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
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: "5px",
        }}
      >
        {pokemonData?.map((poke, i) => {
          return (
            <div key={i} style={{ border: "1px solid black" }}>
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
    </div>
  );
}

export default App;
