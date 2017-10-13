import React from 'react';

import { VFlexBox } from '../Components/Common/FlexBoxes';
import ImageBox from '../Components/ImageBox';

import escriptori from '../assets/escriptori.png';

import './home.css';

const CompetenciImageBox = (props) => {
  return (
    <div className="sui-home__competencies">
      <img src={props.img} width={284} />
      <h3>{props.text}</h3>
    </div>
  );
};

const Home = () => (
  <div className="sui-home--wrapper">
    <VFlexBox vAlign="center">
      <div className="sui-home__image-left">
        <img src={escriptori} alt="escriptory treballant" height={284} />
      </div>
      <div className="sui-home__central-column">
        <h1>"Design is thinking made visual"</h1>
        <p className="sui-home__introduction-text">
          El nostre objectiu és crear una identitat corporativa que ajudi a potenciar els valors que voleu transmetre com
          empresa i enfocar-nos a aquell target o públic objectiu al qual voleu arribar. Ens agrada treballar d’una manera
          propera amb els clients per detectar així les necessitats de l’encarrec i dur a terme una imatge corporativa
          ajustada a cada client. agrada treballar d’una manera propera amb els clients per detectar així les necessitats
          de l’encarrec i dur a terme una imatge corporativa ajustada a cada client.
        </p>
      </div>
      <div className="sui-home__image-right">
        <img src={escriptori} alt="escriptory treballant 2" height={568} />
      </div>
    </VFlexBox>
    <VFlexBox>
      <CompetenciImageBox img="https://suilabs.com/public/img/SuilabsLogo.svg" text="Estrategia de comunicació" />
      <CompetenciImageBox img="https://suilabs.com/public/img/SuilabsLogo.svg" text="Desenvolupament de Conceptes" />
      <CompetenciImageBox img="https://suilabs.com/public/img/SuilabsLogo.svg" text="Estrategia de comunicació" />
    </VFlexBox>
  </div>
);

export default Home;
