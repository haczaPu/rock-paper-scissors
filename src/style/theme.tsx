import { extendTheme } from "@chakra-ui/react";

export const myTheme = extendTheme({
  styles: {
    global: {
      body: {
        bgGradient: "radial(hsl(214, 47%, 23%) 0%, hsl(237, 49%, 15%) 100%)",
        color: "black",
        fontFamily: "'Barlow Semi Condensed', sans-serif",
        boxSizing: "borderBox",
        letterSpacing: "2px",
      },
    },
  },
  colors: {
    pri: {
      blue: "hsl(233, 26%, 24%)",
      green: "hsl(136, 65%, 51%)",
      cyan: "hsl(192, 70%, 51%)",
    },
    neu: {
      green: "#22cc8d",
      blue: "hsl(233, 8%, 62%)",
      lightBlue: "hsl(220, 16%, 96%)",
      lightCyan: "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
});
