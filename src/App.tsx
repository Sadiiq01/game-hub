import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GamesGrid from "./component/GamesGrid";
import Genrelist from "./component/genreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

const App = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main" `,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show when={isLargeScreen}>
          <GridItem area={"aside"}>
            <Genrelist
              onSelectGenra={(genra) => {
                setSelectedGenre(genra);
              }}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GamesGrid selectedGenra={selectedGenre} />
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
