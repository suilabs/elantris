import React from 'react';
import Gallery from '../Components/ImageGallery';

// import ImgKlama from '../../../static-server/public/images/klama/targets.png';
// import ImgLeSense from '../../../static-server/public/images/LeSense/mocklesense.jpg';
// import ImgMercat from '../../../static-server/public/images/mercat montgat/IMG-20170110-WA0005-2.jpg';
// import ImgMiqui from '../../../static-server/public/images/miqui/miquitargets 2.jpg';
// import ImgMiriam from '../../../static-server/public/images/miriam/portada.png';
// import ImgOrigens from '../../../static-server/public/images/origens/etiquetesorigens.jpg';
// import ImgPipeline from '../../../static-server/public/images/pipeline/logo1_blau.jpg';
// import ImgRec from '../../../static-server/public/images/rec/rec-info.jpg';

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
<div></div>
)

export default Dessign;
