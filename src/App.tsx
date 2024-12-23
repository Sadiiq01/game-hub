import React from "react";
import { Button } from "@/components/ui/button";
import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./component/NavBar";

const App = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
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
          <GridItem area={"aside"} bg={"gold"}>
            aside
          </GridItem>
        </Show>
        <GridItem area={"main"} bg={"green"}>
          main
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
