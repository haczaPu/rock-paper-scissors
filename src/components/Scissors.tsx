import React from "react";
import { Button } from "@chakra-ui/react";

type ScissorsProps = {
  handlePlayerChoice: any;
  showResult: boolean;
};

const Scissors: React.FC<ScissorsProps> = ({ handlePlayerChoice, showResult }) => {
  return (
    <Button
      top={showResult ? "unset" : "60px"}
      left={showResult ? "unset" : "340px"}
      position={showResult ? "static" : "absolute"}
      cursor={showResult ? "default" : "pointer"}
      onClick={showResult ? "" : handlePlayerChoice}
      id="scissors"
      w="200px"
      h="200px"
      borderRadius="50%"
      bg="white url('./assets/images/icon-scissors.svg') "
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="80px"
      boxShadow="0px 11px 0px -3px #ccd0db inset,0 9px 0 0 #c76c1b "
      border="20px solid hsl(40, 84%, 53%)"
      _hover={showResult ? {} : { transform: "scale(0.9)" }}
      _active={showResult ? {} : { transform: "rotate(0.1turn)" }}
      _focus={{}}
    ></Button>
  );
};

export default Scissors;
