import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/UI/Hero";
import Counter from "./components/UI/Cards";
import Services from "./components/UI/Services";
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
      <Counter />
      <Wave corWave={"var(--body-bg)"} corBackground={"var(--body-bg-2)"} />
      <Services />
    </>
  );
}

export default App;
