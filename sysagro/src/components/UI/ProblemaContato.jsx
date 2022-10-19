import React from "react";
import "../../styles/problemaContato.css";

const ProblemaContato = () => {
  return (
    <section id="missao">
      <div className="container">
        <div className="services__top-content">
          <div className="card">
            
          <div class="cardTextoPrincipal">
            <h2 className="tituloProblema">Nossa Missão</h2>
            Um dos principais problemas encontrados no Mercado Avícola é a gestão do Manejo Pré-abate das aves. Se não for bem executado, pode gerar muitos prejuízos e impactar negativamente na qualidade final do produto, onde, no pior dos casos, o lote inteiro é descartado.
            <br/>
            Para que esse processo seja feito da melhor forma possível, o Extensionista deve saber quase em tempo real como o Produtor está conduzindo cada fase, e com a informação, poder tomar as decisões necessárias. 
            <br/>
            Para resolver esse problema, a SysAgro apresenta uma solução multiplataforma e de fácil uso para avicultores e extensionistas!
          </div>

          <br/>      
          <div class="infoFinaisCard">
            <span class="tituloInfoFinal">Acabe com o Problema do Manejo Pré-abate</span>
            <small class="descInfoFinal">Otimize todo o processo através da solução SysAgro Aviário.</small>
            <button class="primary__btn botaoInfoFinal">Entre em contato agora!</button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemaContato;
