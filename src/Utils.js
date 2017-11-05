import config from './config.json';

const getCssFromNode = (element, property) =>
  window.getComputedStyle(element).getPropertyValue(property);
const getCssFromString = () => {
  throw Error('Not Implemented');
};

const Utils = {
  getCss(element, property) {
    if (typeof element === 'string') {
      return getCssFromString(element, property);
    }
    return getCssFromNode(element, property);
  },
  getImage(imagePath) {
    console.log(config, this.getEnvironment(), config[this.getEnvironment()]);
    const { hostname, images } = config[this.getEnvironment()].statics;
    const url = `${hostname}/${images}/${imagePath}`;
    console.log(url);
    return url;
  },
  getEnvironment() {
    // TODO implement a true getter
    return 'dev';
  },
  getAPIPath() {
    const {hostname, path} = config[this.getEnvironment()].api;
    return `${hostname}/${path}`;
  }
};

export default Utils;

