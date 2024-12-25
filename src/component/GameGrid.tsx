import { game } from "@/hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const GameGrid = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default GameGrid;
