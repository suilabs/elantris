import React, { Fragment } from 'react';

import { VFlexBox, HFlexBox } from '../Components/Common/FlexBoxes';
import { BreakMobile, BreakOverMobile } from '../Components/Common/Breakpoint';
import translation from '../Services/TranslationService';
import Utils from '../Utils';

import './home.scss';

const TextPresentacio = () => (
  <HFlexBox className="sui-home__introduction-wrapper">
    <div
      className="sui-home__introduction-text"
    >
      {
        translation().homePageContent.map(
          p => <p key={p} dangerouslySetInnerHTML={{ __html: p }} />,
        )
      }
    </div>
  </HFlexBox>
);

const DesignText = () => <div className="sui-home__design-text">design</div>;

const Content = () => (
  <Fragment>
    <div className="sui-home__image-left">
      <DesignText />
      <img src={Utils.getAWSImagesPath('homeauri.jpeg')} alt="Auri lampara" height={284} />
    </div>
    ,
    <div className="sui-home__central-column">
      <TextPresentacio />
    </div>,
    <div className="sui-home__image-right">
      <div className="sui-home__software-text">software</div>
      <div className="sui-home__full-text">
        <div>Design &<br />Software</div>
      </div>
      <img src={Utils.getAWSImagesPath('homefotosoftware.jpeg')} alt="escriptori treballant" height={568} />
    </div>,
  </Fragment>
);

const Home = () => (
  <div className="sui-home--wrapper">
    <BreakOverMobile>
      <VFlexBox vAlign="center">
        <Content />
      </VFlexBox>
    </BreakOverMobile>
    <BreakMobile>
      <HFlexBox vAlign="center">
        <Content />
      </HFlexBox>
    </BreakMobile>
  </div>
);

export default Home;
