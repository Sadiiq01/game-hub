import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GamesGrid from "./component/GamesGrid";
import Genrelist from "./component/genreList";

const App = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main" `,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns="200px 3fr"
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show when={isLargeScreen}>
          <GridItem area={"aside"}>
            <Genrelist />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GamesGrid />
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
