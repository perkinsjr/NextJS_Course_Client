import { Global, css } from "@emotion/core";
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/core";
import { StaticKitProvider } from "@statickit/react";
import { DefaultSeo } from "next-seo";
import "../styles/global.css";
import SEO from "../lib/next-seo.config";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ${colorMode === "light" ? "Dark" : "Light"};
          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "white" : "#171923"};
          }
        `}
      />
      {children}
    </>
  );
};

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ColorModeProvider value="light">
        <GlobalStyle>
          <StaticKitProvider site="RANDOM_SITE">
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </StaticKitProvider>
        </GlobalStyle>
      </ColorModeProvider>
    </ThemeProvider>
  );
}
