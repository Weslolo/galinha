import React from "react";
import "../../styles/cards.css";

import dashboard from "../../images/dashboard.svg";
import facilidadeUso from "../../images/facilidadeUso.svg";
import onlineOffline from "../../images/onlineOffline.svg";
import rapidoEficiente from "../../images/rapidoEficiente.svg";

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

const Counter = () => {
  return (
    <section className="card" id="projects">
      <div className="container">
        <div className="cardsWrapper">
          {cardData.map((item, index) => (
            <div className="cardItem" key={index}>
              <img
                src={item.imagem}
                alt={item.imagemAlt}
                className="imgCard"
              />
              <h3 className="cardTitulo">{item.text}</h3>
              <h3 className="cardDescricao">{item.descricao}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
