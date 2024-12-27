import useGenre, { Genre } from "@/hooks/useGenres";
import cropImage from "@/services/image-crop";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";

interface Props {
  onSelectGenra: (genre: Genre) => void;
}

const Genrelist = ({ onSelectGenra }: Props) => {
  const { data, isLoading, error } = useGenre();
  if (error) return null;
  if (isLoading) return <Spinner color={"black"} />;
  return (
    <List.Root spaceY={"20px"}>
      {data.map((genra) => (
        <ListItem key={genra.id}>
          <HStack>
            <Image
              boxSize={"32px"}
              src={cropImage(genra.image_background)}
              borderRadius={8}
            />
            <Button
              fontSize={"lg"}
              variant={"plain"}
              onClick={() => {
                onSelectGenra(genra);
              }}
            >
              {genra.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default Genrelist;
