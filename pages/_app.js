import "../styles/globals.css";
import {AppContextProvider} from "../context/appContext";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <header>
        <Nav />
      </header>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;