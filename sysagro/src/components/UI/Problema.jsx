import React from "react";
import "../../styles/problema.css";
const Problema = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="services__top-content">
          <h2 className="tituloProblema">Sobre o Problema</h2>
          <div className="card">
          Um dos principais problemas encontrados no Mercado Avícola é a gestão do Manejo Pré-abate das aves. Se não for bem executado, pode gerar muitos prejuízos e impactar negativamente na qualidade final do produto, onde, no pior dos casos, o lote inteiro é descartado.
          <br/>
          Para que esse processo seja feito da melhor forma possível, o Extensionista deve saber quase em tempo real como o Produtor está conduzindo cada fase, e com a informação, poder tomar as decisões necessárias. Esse é um dos maiores obstáculos enfrentados.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problema;
