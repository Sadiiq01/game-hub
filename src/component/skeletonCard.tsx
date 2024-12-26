import { Card, Skeleton } from "@chakra-ui/react";
import React from "react";

const SkeletonCard = () => {
  return (
    <Card.Root width={"300px"} spaceX="40px" gap="40px">
      <Skeleton height="200px" width={"100%"} />
      <Card.Body>
        <Skeleton height="20px" width="100%" />
      </Card.Body>
    </Card.Root>
  );
};

export default SkeletonCard;
