import "../styles/globals.css";
import type { AppProps } from "next/app";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </ChakraProvider>
  );
}
