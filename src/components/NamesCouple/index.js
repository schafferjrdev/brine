import React from "react";
import couple from "../../images/couple.svg";
import bruna from "../../images/bruna.png";
import bine from "../../images/bine.png";

import "./style.scss";

const NamesCouple = () => {
  return (
    <div className="names-couple">
      <img src={couple} alt="nome do casal" className="logo-img" />
      <div className="couple">
        <div className="couple-text-image">
          <img src={bruna} alt="bruna" className="bruna" />
          <div className="noiva-text">
            <span>a noiva</span>
            <div>
              Kpoper, fanfiqueira, romântica, inteligente... qualquer um poderia
              passar horas reunindo as qualidades da nossa noivinha, sua
              habilidade de ser sempre compreensiva é um afago pra qualquer alma
              inquieta, fogo que aquece os corações frágeis.
            </div>
          </div>
        </div>

        <div className="couple-text-image">
          <img src={bine} alt="bine" className="bine" />
          <div className="noivo-text">
            <span>o noivo</span>
            <div>
              O sorriso mais encantador do mundo, o nosso principezinho. Sempre
              gentil, carinhoso e grande amigo para todas as horas. Que o fio
              invisível que liga você a Bruna nunca se parta.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NamesCouple;
