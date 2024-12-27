import useGenre from "@/hooks/useGenres";
import cropImage from "@/services/image-crop";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";

const Genrelist = () => {
  const { data } = useGenre();
  return (
    <List.Root spaceY={"20px"}>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image
              boxSize={"32px"}
              src={cropImage(genre.image_background)}
              borderRadius={8}
            />
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default Genrelist;
