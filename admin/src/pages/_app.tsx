import "../styles/globals.css";
import type { AppProps } from "next/app";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
