import React from "react";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenres";

const GenreList = () => {
  const { data: genres, error, isLoading } = useData<Genre>("/genres");

  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
