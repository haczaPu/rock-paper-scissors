import * as React from "react";
import { useState, useEffect } from "react";
import { myTheme } from "./style/theme";
import { ChakraProvider, Flex, Button } from "@chakra-ui/react";
import ScoreBoard from "./components/ScoreBoard";
import Game from "./components/Game";
import Result from "./components/Result";
import Rules from "./components/Rules";
import Paper from "./components/Paper";
import Rock from "./components/Rock";
import Scissors from "./components/Scissors";

const App = () => {
  const [score, setScore] = useState<number>(0);
  const [playerChoice, setPlayerChoice] = useState<string>("");
  const [compChoice, setCompChoice] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false);
  const [rulesOpen, setRulesOpen] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>("");
  const [winner, setWinner] = useState<string>("");
  const [gameOn, setGameOn] = useState<boolean>(false);

  // Player choice event
  const handlePlayerChoice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerChoice(e.target.id);
    drawComputerChoice();
    setShowResult(true);
    setGameOn(true);
  };

  // Draw computer choice
  const drawComputerChoice = () => {
    const choices: string[] = ["rock", "paper", "scissors"];
    const drawChoice: number = Math.floor(Math.random() * choices.length);
    setCompChoice(choices[drawChoice]);
  };

  // Mark out winner
  useEffect(() => {
    const findWinner = () => {
      const shapes = {
        rock: ["scissors", "lizard"],
        paper: ["rock", "spock"],
        scissors: ["paper", "lizard"],
      };
      if (gameOn) {
        if (playerChoice === compChoice) {
          setMsg("IT'S A DRAW");
          setWinner("");
        } else if (shapes[playerChoice].includes(compChoice)) {
          setMsg("YOU WIN");
          setScore(score + 1);
          setWinner("player");
        } else {
          setMsg("YOU LOSE");
          setWinner("computer");
          setScore(score - 1);
        }
      }
    };
    findWinner();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [compChoice, playerChoice]);

  //Render choices
  const renderChoices = (shape: string) => {
    switch (shape) {
      case "rock":
        return <Rock handlePlayerChoice={handlePlayerChoice} showResult={showResult} />;
      case "paper":
        return <Paper handlePlayerChoice={handlePlayerChoice} showResult={showResult} />;
      case "scissors":
        return <Scissors handlePlayerChoice={handlePlayerChoice} showResult={showResult} />;
      default:
        break;
    }
  };

  //Play again handler
  const handlePlayAgain = (): void => {
    setShowResult(false);
    setCompChoice("");
    setPlayerChoice("");
    setMsg("");
    setGameOn(false);
  };

  //Open rules pop-up
  const handleOpenPopUp = (): void => {
    setRulesOpen(true);
  };

  //Close rules pop-up
  const handleClosePopUp = (): void => {
    setRulesOpen(false);
  };

  return (
    <ChakraProvider resetCSS theme={myTheme}>
      {rulesOpen ? <Rules handleClosePopUp={handleClosePopUp} /> : null}
      <Flex direction="column" alignItems="center" pt="45px" h="100vh">
        <ScoreBoard score={score} />
        {!showResult ? (
          <Game handlePlayerChoice={handlePlayerChoice} showResult={showResult} />
        ) : (
          <Result
            renderChoices={renderChoices}
            playerChoice={playerChoice}
            compChoice={compChoice}
            msg={msg}
            handlePlayAgain={handlePlayAgain}
            handlePlayerChoice={handlePlayerChoice}
            showResult={showResult}
            winner={winner}
          />
        )}
        <Button
          onClick={handleOpenPopUp}
          w="140px"
          h="45px"
          bg="none"
          color="white"
          position="absolute"
          bottom="50px"
          right="50px"
          border="solid 3px hsl(217, 16%, 45%)"
          borderRadius="10px"
          fontSize="20px"
          letterSpacing="2px"
        >
          RULES
        </Button>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
