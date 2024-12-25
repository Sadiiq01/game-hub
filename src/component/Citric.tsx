import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const Critic = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <Badge padding={2} color={color}>
      {score}
    </Badge>
  );
};

export default Critic;
