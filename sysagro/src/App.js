import React, { useState, useEffect } from "react";

import "./App.css";
import "./styles/bootstrap-grid.min.css";

//Components
import Header from "./components/Header/Header";
import Hero from "./components/UI/Hero";
import Cards from "./components/UI/Cards";
import Problema from "./components/UI/Problema";
import Wave from "./components/UI/Wave";

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
      <Problema />
    </>
  );
}

export default App;
