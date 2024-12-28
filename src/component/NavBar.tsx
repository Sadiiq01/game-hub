import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import MySwitchComponent from "./swithColorMode";
import SearchInput from "./searchInput";

const NavBar = () => {
  return (
    <div>
      <HStack width={"100%"}>
        <Image src={logo} boxSize={"60px"} />
        <SearchInput />
        <MySwitchComponent />
      </HStack>
    </div>
  );
};

export default NavBar;
