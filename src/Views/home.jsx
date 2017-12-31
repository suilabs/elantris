import React from 'react';

import FollowUs from '../Components/FollowUs';
import { VFlexBox, HFlexBox } from '../Components/Common/FlexBoxes';
import Utils from '../Utils';

import './home.css';

const Home = () => (
  <div className="sui-home--wrapper">
    <VFlexBox vAlign="center">
      <div className="sui-home__image-left">
        <div className="sui-home__design-text">design</div>
        <img src={Utils.getStaticImagesPath('home/homeauri.png')} alt="Auri lampara" height={284} />
      </div>
      <div className="sui-home__central-column">
        <HFlexBox>
          <div className="sui-home__introduction-text">
            <p>
              <strong>Suilabs</strong> som un estudi
              multidisciplinari de disseny
              i programació.
            </p>
            <p>
              Especialitzats en el disseny
              d’identitat corporativa i la
              programació de pàgines web
              i apps.
            </p>
            <p>
              El nostre objectiu és arribar
              a materialitzar un concepte
              amb el qual el client
              s’identifiqui.
            </p>
            <p>
              Tenim empenta, ganes de
              seguir aprenent i il·lusió
              d’afrontar nous reptes, amb
              honestedat i rigor perquè
              creiem amb la feina ben feta.
            </p>
            <p>
              El nostre tracte amb el client
              és sincer i proper. Escoltem,
              empatitzem i ens adaptem a
              les necessitats de cada client
              i projecte.
            </p>
            <p>
              Ens agrada fer pedagogia per
              explicar el nostre procés de
              disseny i justificar propostes.
            </p>
          </div>
          <FollowUs show />
        </HFlexBox>
      </div>
      <div className="sui-home__image-right">
        <div className="sui-home__software-text">software</div>
        <img src={Utils.getStaticImagesPath('home/homefotosoftware.png')} alt="escriptori treballant" height={568} />
      </div>
    </VFlexBox>
  </div>
);

export default Home;
