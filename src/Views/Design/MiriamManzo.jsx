import React from 'react';
import Utils from '../../Utils';

import ProjectWrapper from '../../Components/ProjectWrapper/ProjectWrapper';
import { ImageBoxWithFlange as ImageBoxWF } from '../../Components/ImageBox';
// import miriam1 from '../../../../static-server/public/images/miriam/IMG_20170213_113447.jpg';
// import miriam2 from '../../../../static-server/public/images/miriam/IMG_20170213_114008.jpg';

import './MiriamManzo.css';

const MiriamMazo = () => (
  <ProjectWrapper>
    <div className="sui-project-detail--title">
      <h1>· Miriam Manzo ·</h1>
      <span> Identitat Corporativa </span>
    </div>
    <ImageBoxWF img={Utils.getImage('miriam/IMG_20170213_113447.jpg')} alt="Projecte Miriam Foto 1" >
      Aquest projecte consisteix en el redisseny de la imatge corporativa de Miriam Manzo, especialitzada en l'àmbit de la salut física i psíquica humana. Un cop analitzades les teràpies que du a terme destaco tres mots: REEDUCAR, RECONDUIR, RECUPERAR. Aquests mots reflecteixen les característiques més importants de la seva tasca com a terapeuta i per tant s'han de veure reflectides en el logotip.
    </ImageBoxWF>
    <ImageBoxWF img={Utils.getImage('miriam/IMG_20170213_114008.jpg')} alt="Projecte Miriam Foto 2" >
      La "r" comuna a inici de cada concepte és l'element significatiu. En el logotip s'han d'insinuar les "r" i que són teràpies destinades a persones. Per aquest motiu en el logotip s'hi pot apreciar dos personatges agafats de la mà on un d'ells simbolitza la terapeuta i l'altre el pacient. En un segon cop d'ull podem apreciar com els personatges s'han creat a partir dels caràcters "r".
    </ImageBoxWF>
  </ProjectWrapper>
);

export default MiriamMazo;

