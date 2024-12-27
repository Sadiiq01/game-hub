import { Switch } from "@/components/ui/switch";
import { HStack, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const MySwitchComponent = () => {
  const [checked, setChecked] = useState(false);

  // Effect to change background color based on checked state
  // useEffect(() => {
  //   document.body.style.backgroundColor = checked ? "black" : "white";
  // }, [checked]);

  // useEffect(() => {
  //     if (document.body.style.background === "black") {
  //       document.body.style.color = "white";
  //     } else if (document.body.style.background === "white") {
  //       document.body.style.color = "green";
  //     }
  // }, []);

  return (
    <HStack>
      <Switch
        checked={checked}
        onCheckedChange={(e: any) => setChecked(e.checked)}
      />
      <Text color={checked ? "white" : "black"}>
        {checked ? "DarkMode" : "lightMode"}
      </Text>
    </HStack>
  );
};

export default MySwitchComponent;
