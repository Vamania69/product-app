import { defineStyle, defineStyleConfig, extendTheme } from "@chakra-ui/react";

const baseStyle = defineStyle({
  color: "white",
  fontFamily: "mono",
  fontWeight: "semibold",
});

const sizes = {
  
  md: defineStyle({
    fontWeight: "semibold",
    fontSize: "1.5em",
  }),
};

export const HeadingTheme = defineStyleConfig({
  baseStyle,
  sizes,
});
