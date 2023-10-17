import "../styles/globals.css";
// import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { customChakraTheme } from "../styles/customChakraTheme";
import { cardTheme } from "../styles/components/CardStyle";
import { buttonTheme } from "../styles/components/ButtonStyles";
// import styles from "./styles.module.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const theme = extendTheme(
    { components: { Card: cardTheme } },
    { components: { Button: buttonTheme } }
  );
  return (
    <div  className="bg_primary">
      <ChakraProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
}
