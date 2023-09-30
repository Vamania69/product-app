import "../styles/globals.css";
// import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { customChakraTheme } from "../styles/customChakraTheme";
import { cardTheme } from "../styles/components/CardStyle";
import { buttonTheme } from "../styles/components/ButtonStyles";
import { HeadingTheme } from "../styles/components/HeadingStyle";
import { Provider } from "react-redux";
import { store } from "../globalReduxStore/store";

export default function App({ Component, pageProps }) {
  const theme = extendTheme(
    { components: { Card: cardTheme } },
    { components: { Button: buttonTheme } },
    { components: { Heading: HeadingTheme } }
  );
  return (
    <div className="bg-dark-primary">
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <Navbar />
          <Component {...pageProps} />
        </Provider>
      </ChakraProvider>
    </div>
  );
}
