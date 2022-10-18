import React, { useState, useEffect } from "react";

import "./App.css";
import "./styles/bootstrap-grid.min.css";

//Components
import Header from "./components/Header/Header";
import Hero from "./components/UI/Hero";
import Cards from "./components/UI/Cards";
import ProblemaContato from "./components/UI/ProblemaContato";
import Wave from "./components/UI/Wave";
import Footer from "./components/UI/Footer";

function App() {
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    theme == "" ? setTheme("light-theme") : setTheme("");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <Wave corWave={"var(--body-bg-2)"} />
      <Cards />
      <Wave corWave={"var(--body-bg-3)"} corBackground={"var(--body-bg-2)"} />
      <ProblemaContato />
      <Footer theme={theme}/>
    </>
  );
}

export default App;
