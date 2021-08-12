import React from "react";
import { Image, Text, Flex, Box } from "@chakra-ui/react";

type ScoreBoardProps = {
  score: number;
};

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score }) => {
  return (
    <Flex
      as="header"
      w={["90%", "90%", "700px", "700px"]}
      h={["100px", "150px", "150px", "150px"]}
      border="solid 3px hsl(217, 16%, 45%)"
      alignItems="center"
      justifyContent="space-between"
      p="20px"
      borderRadius="20px"
    >
      <Image src="./assets/images/logo.svg" alt="logo" h={["120%", "100%", "100%", "100%"]} />

      <Box
        w={["100px", "150px", "150px", "150px"]}
        h={["70px", "115px", "115px", "115px"]}
        bg="white"
        borderRadius="10px"
        textAlign="center"
        p={["5px", "15px", "15px", "15px"]}
      >
        <Text h="10px" fontSize={["12px", "18px", "18px", "18px"]} color="hsl(229, 64%, 46%)">
          SCORE
        </Text>
        <Text color="hsl(229, 25%, 31%)" fontSize={["40px", "60px", "60px", "60px"]}>
          {score}
        </Text>
      </Box>
    </Flex>
  );
};

export default ScoreBoard;
