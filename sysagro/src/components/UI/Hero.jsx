import React from "react";
import "../../styles/hero.css";
import heroDarkImg from "../../images/telaInicialCelular.png";
import lightImg from "../../images/telaInicialCelular.png";

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero = ({theme, modalHandleShow}) => {
  return (
    <section id="inicio" className="hero__section">
      <Container className="container">
        <Row className="hero__wrapper">
          <Col className="hero__content" xs={12} md={6}>
            <div>
              <h2 class="textAlignCenterMD">
                Uma Solução Inovadora para o{" "}
                <span className="highlight">Manejo Pré-abate de Aves</span>
              </h2>
            </div>
            <p className="description textAlignCenterMD">
              Através de um aplicativo mobile integrado com um sistema WEB, a
              SysAgro conecta o produtor e o extensionista praticamente em tempo
              real.
            </p>
            <div className="hero__btns justifyCenterMD">
              <a className="primary__btn" onClick={() => {modalHandleShow()}}>
                Entre em contato para saber mais!
              </a>
            </div>
          </Col>

          <Col className="hero__img" xs={12} md={6}>
            <img
              src={theme === "light-theme" ? lightImg : heroDarkImg}
              alt="hero-img"
              className="imgCelular"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
