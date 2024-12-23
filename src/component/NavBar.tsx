import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import MySwitchComponent from "./swithColorMode";

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent={"space-between"}>
        <Image src={logo} boxSize={"60px"} />
        <MySwitchComponent />
      </HStack>
    </div>
  );
};

export default NavBar;
