import React, { useEffect, useState } from "react";
import apiClient from "../services/api-clicnt";

interface game {
  id: number;
  name: string;
}

interface fetchGameResponse {
  count: number;
  results: game[];
}

const GamesGrid = () => {
  const [games, setGames] = useState<game[]>([]);
  const [Err, setErr] = useState<any>();

  useEffect(() => {
    apiClient
      .get<fetchGameResponse>("xx/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setErr(err.message));
  } , []);

  return (
    <div>
      <ul>
        {games.map((game) => (
          <p key={game.id}>{game.name}</p>
        ))}
      </ul>
      <p>{Err}</p>
    </div>
  );
};

export default GamesGrid;
