import APIConnector from '../api/ApiConnector';

const data = {
  reccrealo: {
    title: 'Recrealo',
    subTitle: '',
    key: 'reccrealo',
    coverImage: 'rec/rec-info.jpg',
    type: 'Infografia il·lustrada',
    images: [
      { url: 'rec/rec-perso2.jpg', text: 'Bla bla bla bla bla bla' },
      { url: 'rec/rec-personatges.jpg', text: 'Bla bla bla bla bla bla' },
    ],
  },
  miriam: {
    title: 'Miriam Manzo',
    subTitle: '',
    key: 'reccrealo',
    coverImage: 'miriam/portada.png',
    type: 'Identitat Corporative',
    images: [
      {
        url: 'miriam/IMG_20170213_113447.jpg',
        text: 'Aquest projecte consisteix en el redisseny de la imatge corporativa de Miriam Manzo, especialitzada en l\'àmbit de la salut física i psíquica humana. Un cop analitzades les teràpies que du a terme destaco tres mots: REEDUCAR, RECONDUIR, RECUPERAR. Aquests mots reflecteixen les característiques més importants de la seva tasca com a terapeuta i per tant s\'han de veure reflectides en el logotip.',
      },
      {
        url: 'miriam/IMG_20170213_114008.jpg',
        text: '      La "r" comuna a inici de cada concepte és l\'element significatiu. En el logotip s\'han d\'insinuar les "r" i que són teràpies destinades a persones. Per aquest motiu en el logotip s\'hi pot apreciar dos personatges agafats de la mà on un d\'ells simbolitza la terapeuta i l\'altre el pacient. En un segon cop d\'ull podem apreciar com els personatges s\'han creat a partir dels caràcters "r".',
      },
    ],
  },
};

export default {
  getProjects: () => APIConnector.getProjects()
};
