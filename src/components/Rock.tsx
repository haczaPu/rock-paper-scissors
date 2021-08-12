import React from "react";
import { Button } from "@chakra-ui/react";

type RockProps = {
  handlePlayerChoice: any;
  showResult: boolean;
};

const Rock: React.FC<RockProps> = ({ handlePlayerChoice, showResult }) => {
  return (
    <Button
      top={showResult ? "unset" : ["205px", "305px", "305px", "305px"]}
      position={showResult ? "static" : "absolute"}
      cursor={showResult ? "default" : "pointer"}
      onClick={showResult ? null : handlePlayerChoice}
      id="rock"
      w={["120px", "140px", "200px", "200px"]}
      h={["120px", "140px", "200px", "200px"]}
      borderRadius="50%"
      bg="white url('./assets/images/icon-rock.svg') "
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize={["50px", "50px", "80px", "80px"]}
      boxShadow="0px 11px 0px -3px #ccd0db inset,0 9px 0 0 #a01532 "
      border={[
        "10px solid hsl(349, 70%, 56%)",
        "15px solid hsl(349, 70%, 56%)",
        "20px solid hsl(349, 70%, 56%)",
        "20px solid hsl(349, 70%, 56%)",
      ]}
      _hover={showResult ? {} : { transform: "scale(0.9)" }}
      _active={showResult ? {} : { transform: "rotate(0.1turn)" }}
      _focus={{}}
    ></Button>
  );
};

export default Rock;
