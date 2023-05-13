import React from "react";
import { Box, Center } from "@chakra-ui/react";
import Game from "./components/Game";

const App = () => {
  return (
    <Center>
      <Box
        w="30%"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Game />
      </Box>
    </Center>
  );
};

export default App;
