import React from "react";
import "../../styles/cards.css";

import dashboard from "../../images/dashboard.svg";
import facilidadeUso from "../../images/facilidadeUso.svg";
import onlineOffline from "../../images/onlineOffline.svg";
import rapidoEficiente from "../../images/rapidoEficiente.svg";

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const cardData = [
  {
    imagem: rapidoEficiente,
    imagemAlt: "Imagem de Eficiência",
    text: "Rápido e eficiente",
    descricao: "Conexão quase em tempo real entre o produtor e o extensionista"
  },
  {
    imagem: facilidadeUso,
    imagemAlt: "Imagem de Facilidade",
    text: "Fácil de usar",
    descricao: "Interfaces bonitas e práticas para uso diário"
  },
  {
    imagem: onlineOffline,
    imagemAlt: "Rede de WIFI cortada",
    text: "Online e Offline",
    descricao: "Perfeito para as condições do campo"
  },
  {
    imagem: dashboard,
    imagemAlt: "Gráficos de análise",
    text: "Gráficos de análise",
    descricao: "Métricas para melhorar seu desempenho"
  },
];

const Cards = () => {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <section className="cardWrapper" id="projects">
      <Container className="container">
        <Row className="cardsWrapper">
          {cardData.map((item, index) => (
            <Col className={["cardItem", `fade-in-section ${isVisible ? 'is-visible' : ''}`].join(" ")} key={index} xs={6} md={3}  ref={domRef}>
              <img
                src={item.imagem}
                alt={item.imagemAlt}
                className="imgCard"
              />
              <h3 className="cardTitulo">{item.text}</h3>
              <h3 className="cardDescricao">{item.descricao}</h3>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Cards;
