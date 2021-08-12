import React from "react";
import { Button } from "@chakra-ui/react";

type ScissorsProps = {
  handlePlayerChoice: any;
  showResult: boolean;
};

const Scissors: React.FC<ScissorsProps> = ({ handlePlayerChoice, showResult }) => {
  return (
    <Button
      top={showResult ? "unset" : ["50px", "100px", "60px", "60px"]}
      left={showResult ? "unset" : ["230px", "280px", "340px", "340px"]}
      position={showResult ? "static" : "absolute"}
      cursor={showResult ? "default" : "pointer"}
      onClick={showResult ? null : handlePlayerChoice}
      id="scissors"
      w={["120px", "140px", "200px", "200px"]}
      h={["120px", "140px", "200px", "200px"]}
      borderRadius="50%"
      bg="white url('./assets/images/icon-scissors.svg') "
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize={["50px", "50px", "80px", "80px"]}
      boxShadow="0px 11px 0px -3px #ccd0db inset,0 9px 0 0 #c76c1b "
      border={[
        "10px solid hsl(40, 84%, 53%)",
        "15px solid hsl(40, 84%, 53%)",
        "20px solid hsl(40, 84%, 53%)",
        "20px solid hsl(40, 84%, 53%)",
      ]}
      _hover={showResult ? {} : { transform: "scale(0.9)" }}
      _active={showResult ? {} : { transform: "rotate(0.1turn)" }}
      _focus={{}}
    ></Button>
  );
};

export default Scissors;
