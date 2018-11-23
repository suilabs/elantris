import React from 'react';

import Utils from '../Utils';

import './about.scss';
import ProfileCard from '../Components/ProfileCard/profilecard';
import { VFlexBox, justification } from '../Components/Common/FlexBoxes';

const serveisDessign = [
  'Naming',
  'Identitat Corporativa',
  'Disseny Editorial',
  'Disseny Publicitari',
  'Il·lustració',
  'Packaging',
];

const serveisSoftware = [
  'Programació',
  'Web apps',
  'Consultoria',
  '',
  'Interiorisme',
  'Senyaletica d\'Espais',
];

const About = () => (
  <div className="sui-about">
    <div className="sui-about__hero--wrapper">
      <div className="sui-about__text-over-hero">
        &#8220;Construim
        una estratègia
        conceptual,
        funcional i estètica
        per comunicar el que es vol&#8221;
      </div>
      <img
        className="sui-about__hero"
        src={Utils.getStaticImagesPath('fotoperfiljunts.png')}
        alt="Nosotros"
      />
    </div>
    <div className="sui-serveis--wrapper">
      <VFlexBox vAlign={justification.start} justify={justification.around}>
        <div className="sui-serveis__content--wrapper">
          <div className="sui-serveis__titol">
            Els<br />Nostres<br />serveis
          </div>
        </div>
        <div className="sui-serveis__content--wrapper">
          <ul className="sui-serveis__list">
            {serveisDessign.map(el => <li key={el}>{el}</li>)}
          </ul>
        </div>
        <div className="sui-serveis__content--wrapper">
          <ul className="sui-serveis__list">
            {serveisSoftware.map(el => <li key={el}>{el}</li>)}
          </ul>
        </div>
      </VFlexBox>
    </div>
    <VFlexBox
      justify={justification.around}
      vAlign={justification.start}
    >
      <div className="sui-about__equip-text">
        <div>L&#39;equip</div>
      </div>
      <ProfileCard
        img={Utils.getStaticImagesPath('fotoperfilanna.png')}
        name="Anna Berenguer"
        work={['Disseny Gràfic', 'Interiorisme']}
        contact={['+34 646 248 527', 'anna@suilabs.com']}
        social={[{ type: 'linkedIn', url: 'https://www.linkedin.com/in/anna-berenguer-gisbert-798954aa/' }]}
      />
      <ProfileCard
        img={Utils.getStaticImagesPath('fotoperfilborja.png')}
        name="Borja Arias"
        work={['Enginyer del software', '@ Skyscanner Ltd.']}
        contact={['+34 609 759 147', 'barias@suilabs.com']}
        social={[{ type: 'linkedIn', url: 'https://www.linkedin.com/in/borja-arias-navarro-22231a52/' }]}
      />
    </VFlexBox>
  </div>
);

export default About;
