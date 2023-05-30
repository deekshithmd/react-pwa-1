import React from "react";
import "./App.css";
import { getAllPokemonData } from "./api/service";

function App() {
  const [pokemonData, setPokemonData] = React.useState(null);
  const [limit, setLimit] = React.useState(10);
  const [loading, setLoading] = React.useState(false);
  const observerTarget = React.useRef(null);

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getAllPokemonData({ limit });
      setLoading(false);
      setPokemonData(data.results);
    })();
  }, [limit]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting) {
          setLimit((prev) => prev + 10);
        }
      },
      { threshold: 1 }
    );
    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

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
      {loading && <h1>Loading...</h1>}
      <div ref={observerTarget}></div>
    </div>
  );
}

export default App;
