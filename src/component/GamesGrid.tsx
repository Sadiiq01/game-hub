import useGames from "@/hooks/useGames";
import {
  Card,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import GameGrid from "./GameGrid";
import Critic from "./Citric";

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
                <HStack>
                  {game.parent_platform?.map(({ platform }) => {
                    return <Text key={platform.id}>{platform.name}</Text>;
                  }) || <p>No platforms available</p>}

                  <Critic score={game.metacritic} />
                </HStack>
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
