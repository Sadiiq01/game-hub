import { useEffect, useState } from "react";
import apiClient from "../services/api-clicnt";
import { CanceledError } from "axios";

interface platform {
  id: number;
  name: string;
  slug: string;
}
export interface game {
  id: number;
  name: string;
  background_image: string;
  parent_platform: { platform: platform }[];
  metacritic: number;
}

interface fetchGameResponse {
  count: number;
  results: game[];
}

const useGames = () => {
  const [games, setGames] = useState<game[]>([]);
  const [error, setError] = useState<any>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<fetchGameResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        else setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
