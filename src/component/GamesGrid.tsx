import useGames from "@/hooks/useGames";
import { Card, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import GameGrid from "./GameGrid";

const GamesGrid = () => {
  const { games, error } = useGames();

  return (
    <div>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        gap="40px"
        padding={"10px"}
      >
        {games.map((game) => (
          <GameGrid key={game.id}>
            <Card.Root maxW="sm" borderRadius={10}>
              <Image
                src={game.background_image}
                sizes="md"
                width="100%"
                borderRadius={10}
              />
              <Card.Body>
                <Heading fontSize={"2xl"}>{game.name}</Heading>
              </Card.Body>
            </Card.Root>
          </GameGrid>
        ))}
      </SimpleGrid>
      <p>{error}</p>
    </div>
  );
};

export default GamesGrid;
