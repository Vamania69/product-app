import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

  // default style for every component in the card anatomy
const baseStyle = definePartsStyle({

  container: {
    bgGradient: "linear(to-b,#44337A ,#1c1127)",
    maxW:"235px",
    color:"white",
    borderRadius:"lg",
  },
  header: {
    fontWeight: "bold",
    padding:"0px"
  },
  body: {
    //issue here with color as the heading tag contian predefined color for the text
    color: "gray.600 ",
    padding:"0px"

  },
  footer: {
    padding: "10px",
    gap: "10px",
    fontWeight: "semibold",
  },
});
 // styling the sizes of the card
const sizes = {
    // medium size
  md: definePartsStyle({
    container: {
    },
  }),
 // smaller size 
  sm: definePartsStyle({
    // container styling in the smaller screen
    container: {
      padding: "10px",
    },
    // heading styling in the smaller screen
    header:{
        fontSize:"20px",
        color:"red"
    }
  })
};

export const cardTheme = defineMultiStyleConfig({ baseStyle, sizes });
