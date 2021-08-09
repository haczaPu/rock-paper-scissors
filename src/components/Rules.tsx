import { Flex, Image, Text, HStack, VStack, Button } from "@chakra-ui/react";
import React from "react";

type RulesProps = {
  handleClosePopUp: any;
};

const Rules: React.FC<RulesProps> = ({ handleClosePopUp }) => {
  return (
    <Flex
      w="100%"
      h="100vh"
      bg="hsla(0, 0%, 0%, 0.2)"
      position="absolute"
      justifyContent="center"
      alignItems="center"
      zIndex="1"
    >
      <VStack
        w="400px"
        h="415px"
        p="35px"
        bg="white"
        direction="column"
        justifyContent="space-between"
        borderRadius="15px"
      >
        <HStack w="100%" justifyContent="space-between">
          <Text color="hsl(229, 25%, 31%)" fontSize="3xl" fontWeight="bold" letterSpacing="0">
            RULES
          </Text>
          <Button onClick={handleClosePopUp}>
            <Image src="./assets/images/icon-close.svg" alt="close"></Image>
          </Button>
        </HStack>
        <Image src="./assets/images/image-rules.svg" alt="rules"></Image>
      </VStack>
    </Flex>
  );
};

export default Rules;
