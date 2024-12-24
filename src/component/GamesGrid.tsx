import useGames from "@/hooks/useGames";
import React, { useEffect, useState } from "react";

const GamesGrid = () => {
  const {games , error} = useGames()

  return (
    <div>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
      <p>{error}</p>
    </div>
  );
};

export default GamesGrid;
