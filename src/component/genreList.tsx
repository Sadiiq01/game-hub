import useGenre from "@/hooks/useGenres";
import React from "react";

const Genrelist = () => {
  const { genres, error, isLoading } = useGenre();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default Genrelist;
