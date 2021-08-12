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
    <Flex
      justifyContent="center"
      alignItems="center"
      direction={["column", "column", "row", "row"]}
      pt={["20px", "50px", "100px", "100px"]}
    >
      <Flex direction="column">
        <Text
          color="white"
          textAlign="center"
          fontSize={["lg", "xl", "2xl", "2xl"]}
          mb={["10px", "40px", "40px", "40px"]}
        >
          YOU PICKED
        </Text>
        <Box position="relative">
          {winner === "player" ? (
            <Box
              _before={{
                position: "absolute",
                w: ["100px", "100px", "150px", "150px"],
                h: ["100px", "100px", "150px", "150px"],
                top: ["10px", "30px", "30px", "30px"],
                left: ["10px", "20px", "25px", "25px"],
                zIndex: "-2",
                content: "''",
                borderRadius: "100px",
                boxShadow: [
                  "rgb(31, 55, 86) 0px 0px 0px 30px, rgb(27, 46, 79) 0px 0px 0px 60px, rgb(24, 38, 72) 0px 0px 0px 90px",
                  "rgb(31, 55, 86) 0px 0px 0px 40px, rgb(27, 46, 79) 0px 0px 0px 80px, rgb(24, 38, 72) 0px 0px 0px 120px",
                  "rgb(31, 55, 86) 0px 0px 0px 50px, rgb(27, 46, 79) 0px 0px 0px 100px, rgb(24, 38, 72) 0px 0px 0px 160px",
                  "rgb(31, 55, 86) 0px 0px 0px 60px, rgb(27, 46, 79) 0px 0px 0px 120px, rgb(24, 38, 72) 0px 0px 0px 180px",
                ],
              }}
            ></Box>
          ) : null}
          {renderChoices(playerChoice)}
        </Box>
      </Flex>

      <Flex
        direction="column"
        alignItems="center"
        w={["200px", "200px", "300px", "400px"]}
        m={["20px 0", "40px 0", "0", "0"]}
      >
        <Text textAlign="center" color="white" fontSize={["3xl", "4xl", "5xl", "6xl"]}>
          {msg}
        </Text>
        <Button
          letterSpacing="2px"
          variant="solid"
          w={["120px", "160px", "180px", "220px"]}
          h={["40px", "40px", "45px", "50px"]}
          bg="white"
          onClick={handlePlayAgain}
          _hover={{ color: "red" }}
        >
          PLAY AGAIN
        </Button>
      </Flex>

      <Flex direction="column" justifyContent="center" alignItems="center">
        <Text
          color="white"
          textAlign="center"
          fontSize={["lg", "xl", "2xl", "2xl"]}
          mb={["10px", "40px", "40px", "40px"]}
        >
          THE HOUSE PICKED
        </Text>
        <Box position="relative">
          {winner === "computer" ? (
            <Box
              _before={{
                position: "absolute",
                w: ["150px", "100px", "150px", "150px"],
                h: ["150px", "100px", "150px", "150px"],
                top: ["-10px", "30px", "30px", "30px"],
                left: ["-15px", "20px", "25px", "25px"],
                zIndex: "-2",
                content: "''",
                borderRadius: "100px",
                boxShadow: [
                  "rgb(31, 55, 86) 0px 0px 0px 30px, rgb(27, 46, 79) 0px 0px 0px 60px, rgb(24, 38, 72) 0px 0px 0px 90px",
                  "rgb(31, 55, 86) 0px 0px 0px 40px, rgb(27, 46, 79) 0px 0px 0px 80px, rgb(24, 38, 72) 0px 0px 0px 120px",
                  "rgb(31, 55, 86) 0px 0px 0px 50px, rgb(27, 46, 79) 0px 0px 0px 100px, rgb(24, 38, 72) 0px 0px 0px 160px",
                  "rgb(31, 55, 86) 0px 0px 0px 60px, rgb(27, 46, 79) 0px 0px 0px 120px, rgb(24, 38, 72) 0px 0px 0px 180px",
                ],
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
