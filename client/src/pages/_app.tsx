import "@/styles/global.scss";
import type { AppProps } from "next/app";
import ProductProvider from "@/context/ProductContext";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { ChakraProvider } from "@chakra-ui/react";
import UserProvider from "@/context/UserContext";

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps): JSX.Element {
  return (
    <UserProvider>
      <ProductProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ProductProvider>
    </UserProvider>
  );
}
