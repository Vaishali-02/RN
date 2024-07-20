//import { useEffect } from "react";
// COMMENTED were causing HOME-PAGE to DISAPPEAR.
import HeroSection from "./components/HeroSection";
//import { useGlobalContext } from "./context";
import About from "./About";
import Help from "./Help";

const Home = () => {
  //const { updateHomePage } = useGlobalContext();

  //useEffect(() => updateHomePage(), []);

  return (
    <>
      <HeroSection />
      <About />
      <Help />
    </>
  );
};

export default Home;
