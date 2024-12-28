import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import MySwitchComponent from "./swithColorMode";

const NavBar = () => {
  return (
    <div>
      <HStack width={"100%"} justifyContent={"space-between"}>
        <Image src={logo} boxSize={"60px"} />
        <MySwitchComponent />
      </HStack>
    </div>
  );
};

export default NavBar;
