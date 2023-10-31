import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
// solid variant
const solid = defineStyle({
  color: "white",
  bgGradient: "linear(to-b,#44337A ,#1c1127)",
  borderRadius: "lg", // remove the border radius
  fontWeight: "semibold", // change the font weight
  _hover: {
    bgGradient: "linear(to-b,#1c1127,#44337A )",
    opacity: "0.8",
  },
});

const ghost = defineStyle({
  padding: "7px",
  border: "1px solid", // change the appearance of the border
  bg: "white",
  color: "#44337A",
  borderRadius: "lg", // remove the border radius
  fontWeight: "semibold", // change the font weight
  borderColor: "white",
  _hover: {
    bgGradient: "linear(to-b,#1c1127,#44337A )",
    opacity: "0.8",
    color: "white",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { solid, ghost },
});
