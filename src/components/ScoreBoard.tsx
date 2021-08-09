import React from "react";
import { Image, Text, Flex, Box } from "@chakra-ui/react";

type ScoreBoardProps = {
  score: number;
};

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score }) => {
  return (
    <Flex
      as="header"
      w="700px"
      h="150px"
      border="solid 3px hsl(217, 16%, 45%)"
      alignItems="center"
      justifyContent="space-between"
      p="20px"
      borderRadius="20px"
    >
      <Image src="./assets/images/logo.svg" alt="logo" />

      <Box w="150px" h="115px" bg="white" borderRadius="10px" textAlign="center" p="15px">
        <Text h="10px" fontSize="18px" color="hsl(229, 64%, 46%)">
          SCORE
        </Text>
        <Text color="hsl(229, 25%, 31%)" fontSize="60px">
          {score}
        </Text>
      </Box>
    </Flex>
  );
};

export default ScoreBoard;
