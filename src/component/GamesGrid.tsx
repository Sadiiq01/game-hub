import useGames from "@/hooks/useGames";
import {
  Card,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import GameGrid from "./GameGrid";
import Critic from "./Citric";
import cropImage from "@/services/image-crop";
import SkeletonCard from "./skeletonCard";

const GamesGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        gap="40px"
        padding={"10px"}
      >
        {isLoading &&
          skeletons.map((skeleton) => {
            return (
              <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
                {isLoading &&
                  skeletons.map((skeleton) => <SkeletonCard key={skeleton} />)}
              </div>
            );
          })}
        {data.map((game) => (
          <GameGrid key={game.id}>
            <Card.Root maxW="sm" borderRadius={10}>
              <Image
                src={cropImage(game.background_image)}
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
