import React from 'react';

import Utils from '../Utils';

import './about.scss';
import ProfileCard from '../Components/ProfileCard/profilecard';
import { VFlexBox, justification } from '../Components/Common/FlexBoxes';

import translate from '../Services/TranslationService';


const About = () => {
  const translation = translate();
  const serveisDessign = translation.about_serveis_col_1;

  const serveisSoftware = translation.about_serveis_col_2;

  return (
    <div className="sui-about">
      <div className="sui-about__hero--wrapper">
        <div className="sui-about__text-over-hero">
          {translation.about_inspiration}
        </div>
        <img
          className="sui-about__hero"
          src={Utils.getAWSImagesPath('fotoperfiljunts.png')}
          alt="Nosotros"
        />
      </div>
      <VFlexBox className="sui-serveis--wrapper" vAlign={justification.start} justify={justification.around}>
        <div
          className="sui-serveis__content--wrapper sui-serveis__titol"
          dangerouslySetInnerHTML={{ __html: translation.about_serveis_titol }}
        />
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
      <VFlexBox
        justify={justification.around}
        vAlign={justification.start}
      >
        <div className="sui-about__equip-text">
          <div>{translation.about_equip}</div>
        </div>
        <ProfileCard
          img={Utils.getAWSImagesPath('fotoperfilanna.png')}
          name="Anna Berenguer"
          work={translation.contact_role_anna}
          contact={['+34 646 248 527', 'anna@suilabs.com']}
          social={[{ type: 'linkedIn', url: 'https://www.linkedin.com/in/anna-berenguer-gisbert-798954aa/' }]}
        />
        <ProfileCard
          img={Utils.getAWSImagesPath('fotoperfilborja.png')}
          name="Borja Arias"
          work={translation.contact_role_borja}
          contact={['+34 609 759 147', 'barias@suilabs.com']}
          social={[{ type: 'linkedIn', url: 'https://www.linkedin.com/in/borja-arias-navarro-22231a52/' }]}
        />
      </VFlexBox>
    </div>
  );
};

export default About;
