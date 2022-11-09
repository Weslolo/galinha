import React, { useState, useEffect } from "react";

import "./App.css";
// import "./styles/bootstrap.min.css";
import "./styles/bootstrap-grid.min.css";

//Components
import Header from "./components/Header/Header";
import Hero from "./components/UI/Hero";
import Cards from "./components/UI/Cards";
import ProblemaContato from "./components/UI/MissaoContato";
import Wave from "./components/UI/Wave";
import Footer from "./components/UI/Footer";
import ModalContato from './components/UI/ModalContato'

function App() {
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    theme == "" ? setTheme("light-theme") : setTheme("");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  // Modal Contato
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} modalHandleShow={handleShow} />
      <Hero theme={theme} modalHandleShow={handleShow} />
      <Wave corWave={"var(--body-bg-2)"} id="caracteristicas"/>
      <Cards />
      <Wave corWave={"var(--body-bg)"} corBackground={"var(--body-bg-2)"} />
      <ProblemaContato />
      <Footer theme={theme}/>
      <ModalContato show={show} handleClose={handleClose}  modalHandleShow={handleShow} />
    </>
  );
}

export default App;
