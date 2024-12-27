import React from "react";

interface Props {
  children: React.ReactNode;
}

const GameGrid = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default GameGrid;
