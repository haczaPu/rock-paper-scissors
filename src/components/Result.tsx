import { Button, Flex, Text, Box } from "@chakra-ui/react";
import React from "react";

type ResultProps = {
  msg: string;
  handlePlayAgain: any;
  handlePlayerChoice: any;
  showResult: boolean;
  renderChoices: any;
  playerChoice: string;
  compChoice: string;
  winner: string;
};

const Result: React.FC<ResultProps> = ({ msg, handlePlayAgain, renderChoices, playerChoice, compChoice, winner }) => {
  return (
    <Flex justifyContent="center" alignItems="center" pt="100px">
      <Flex direction="column">
        <Text color="white" textAlign="center" fontSize="2xl" mb="40px">
          YOU PICKED
        </Text>
        <Box position="relative">
          {winner === "player" ? (
            <Box
              _before={{
                position: "absolute",
                w: "150px",
                h: "150px",
                top: "30px",
                left: "25px",
                zIndex: "-2",
                content: "''",
                borderRadius: "100px",
                boxShadow:
                  "rgb(31, 55, 86) 0px 0px 0px 60px, rgb(27, 46, 79) 0px 0px 0px 120px, rgb(24, 38, 72) 0px 0px 0px 180px",
              }}
            ></Box>
          ) : null}
          {renderChoices(playerChoice)}
        </Box>
      </Flex>

      <Flex direction="column" alignItems="center" w="400px">
        <Text textAlign="center" color="white" fontSize="6xl">
          {msg}
        </Text>
        <Button
          letterSpacing="2px"
          variant="solid"
          w="220px"
          h="50px"
          bg="white"
          onClick={handlePlayAgain}
          _hover={{ color: "red" }}
        >
          PLAY AGAIN
        </Button>
      </Flex>

      <Flex direction="column">
        <Text color="white" textAlign="center" fontSize="2xl" mb="40px">
          THE HOUSE PICKED
        </Text>
        <Box position="relative">
          {winner === "computer" ? (
            <Box
              _before={{
                position: "absolute",
                w: "150px",
                h: "150px",
                top: "30px",
                left: "25px",
                zIndex: "-2",
                content: "''",
                borderRadius: "100px",
                boxShadow:
                  "rgb(31, 55, 86) 0px 0px 0px 60px, rgb(27, 46, 79) 0px 0px 0px 120px, rgb(24, 38, 72) 0px 0px 0px 180px",
              }}
            ></Box>
          ) : null}
          {renderChoices(compChoice)}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Result;
