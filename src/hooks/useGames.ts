import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGames = (selectedGenra: Genre | null) =>
  useData<game>("/games", { params: { genres: selectedGenra?.id } }, [
    selectedGenra?.id,
  ]);

export default useGames;
