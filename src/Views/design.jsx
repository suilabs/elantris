import React from 'react';
import Gallery from '../Components/ImageGallery';

import ImgKlama from '../assets/projectes/klama/targets.png';
import ImgLeSense from '../assets/projectes/LeSense/mocklesense.jpg';
import ImgMercat from '../assets/projectes/mercat montgat/IMG-20170110-WA0005-2.jpg';
import ImgMiqui from '../assets/projectes/miqui/miquitargets 2.jpg';
import ImgMiriam from '../assets/projectes/miriam/portada.png';
import ImgOrigens from '../assets/projectes/origens/etiquetesorigens.jpg';
import ImgPipeline from '../assets/projectes/pipeline/logo1_blau.jpg';
import ImgRec from '../assets/projectes/rec/rec-info.jpg';

const createInstance = (title, descr, img, href, tags = ['design']) => {
  return {
    title,
    img,
    tag: tags,
    descr,
    orientation: 'vertical',
    animationDirection: 'vertical',
    href,
  };
}

const Dessign = () => (
  <Gallery
    size={{ width: 284 }}
    instances={[
      createInstance('Klama Communicació', '', ImgKlama, 'https://www.suilabs.com'),
      createInstance('LeSense', '', ImgLeSense, 'https://www.suilabs.com'),
      createInstance('Mercat Montgat', '', ImgMercat, 'https://www.suilabs.com'),
      createInstance('Targetes miqui', '', ImgMiqui, 'https://www.suilabs.com'),
      createInstance('Miriam Manzo', '', ImgMiriam, 'https://www.suilabs.com'),
      createInstance('Origens', '', ImgOrigens, 'https://www.suilabs.com'),
      createInstance('Pipeline', '', ImgPipeline, 'https://www.suilabs.com'),
      createInstance('Rec', '', ImgRec, 'https://www.suilabs.com'),
    ]}
  />
)

export default Dessign;
