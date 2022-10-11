import React from "react";
import "../../styles/hero.css";
import heroDarkImg from "../../images/telaInicialCelular.png";
import lightImg from "../../images/telaInicialCelular.png";
const Hero = (theme) => {
  return (
    <section className="hero__section">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div>
              <h2>
                Uma Solução Inovadora para o{" "}
                <span className="highlight">Manejo Pré-abate de Aves</span>
              </h2>
            </div>
            <p className="description">
              Através de um aplicativo mobile integrado com um sistema WEB, a
              SysAgro conecta o produtor e o extensionista praticamente em tempo
              real.
            </p>
            <div className="hero__btns">
              <button className="primary__btn">
                Entre em contato para saber mais!
              </button>
              {/* <button className="secondary__btn">Discover More</button> */}
            </div>
          </div>

          <div className="hero__img">
            <img
              src={theme == "light-theme" ? lightImg : heroDarkImg}
              alt="hero-img"
              className="imgCelular"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
