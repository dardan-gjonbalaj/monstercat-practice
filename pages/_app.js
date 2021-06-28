import Header from "../components/header";
import Navigation from "../components/navigation";
import { useState } from "react";
import "../styles/globals.css";
import Body from "../components/body";
import Media from "../components/media";

function MyApp({ Component, pageProps }) {
  const [opened, setOpened] = useState(false);

  const toggleOpened = () => setOpened(!opened);

  return (
    <>
      <Header navigationOpened={opened} toggleNavigation={toggleOpened} />
      <Navigation opened={opened} toggleNavigation={toggleOpened} />
      <Body />
      <Media />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
