import "@/styles/global.scss";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import ProductProvider from "@/context/ProductContext";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps): JSX.Element {
  return (
    <SessionProvider session={session}>
      <ProductProvider>
        <Component {...pageProps} />
      </ProductProvider>
    </SessionProvider>
  );
}
