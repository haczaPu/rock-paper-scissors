import React from "react";
import { Button } from "@chakra-ui/react";

type PaperProps = {
  handlePlayerChoice: any;
  showResult: boolean;
};

const Paper: React.FC<PaperProps> = ({ handlePlayerChoice, showResult }) => {
  return (
    <Button
      zIndex="0"
      top={showResult ? "unset" : "60px"}
      left={showResult ? "unset" : "50px"}
      position={showResult ? "static" : "absolute"}
      cursor={showResult ? "default" : "pointer"}
      onClick={showResult ? "" : handlePlayerChoice}
      id="paper"
      w="200px"
      h="200px"
      borderRadius="50%"
      bg="white url('./assets/images/icon-paper.svg') "
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="80px"
      boxShadow="0px 11px 0px -3px #ccd0db inset,0 9px 0 0 #2945c0 "
      border="20px solid hsl(230, 89%, 65%)"
      _hover={showResult ? {} : { transform: "scale(0.9)" }}
      _active={showResult ? {} : { transform: "rotate(0.1turn)" }}
      _focus={{}}
    ></Button>
  );
};

export default Paper;
