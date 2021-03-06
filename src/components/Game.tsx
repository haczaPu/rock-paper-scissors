import { Flex } from "@chakra-ui/react";
import React from "react";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";

type GameProps = {
  handlePlayerChoice: any;
  showResult: boolean;
};

const Game: React.FC<GameProps> = ({ handlePlayerChoice, showResult }) => {
  return (
    <Flex
      bgImage="url('./assets/images/bg-triangle.svg')"
      bgPosition="center"
      bgSize={["200px", "300px", "320px", "320px"]}
      bgRepeat="no-repeat"
      position="relative"
      w={["400px", "450px", "600px", "600px"]}
      h={["400px", "600px", "600px", "600px"]}
      justifyContent="center"
    >
      <Paper handlePlayerChoice={handlePlayerChoice} showResult={showResult} />
      <Scissors handlePlayerChoice={handlePlayerChoice} showResult={showResult} />
      <Rock handlePlayerChoice={handlePlayerChoice} showResult={showResult} />
    </Flex>
  );
};

export default Game;
