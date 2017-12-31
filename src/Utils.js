import config from './config.json';

const getCssFromNode = (element, property) =>
  window.getComputedStyle(element).getPropertyValue(property);
const getCssFromString = () => {
  throw Error('Not Implemented');
};

const Utils = {
  generateKey(str) {
    return str.replace(/ /g, '-').toLowerCase();
  },
  getCss(element, property) {
    if (typeof element === 'string') {
      return getCssFromString(element, property);
    }
    return getCssFromNode(element, property);
  },
  getImage(imagePath) {
    console.log(config, this.getEnvironment(), config[this.getEnvironment()]);
    const { hostname } = config[this.getEnvironment()].statics;
    const url = `${hostname}/${imagePath}`;
    console.log(url);
    return url;
  },
  getEnvironment() {
    return process.env.FORCE_ENV || process.env.NODE_ENV;
  },
  getAPIPath() {
    const { hostname, path } = config[this.getEnvironment()].api;
    return `${hostname}/${path}`;
  },
  getStaticPath() {
    const { hostname } = config[this.getEnvironment()].statics;
    return hostname;
  },
  getStaticImagesPath(suffix = '') {
    const { hostname, images } = config[this.getEnvironment()].statics;
    return `${hostname}/${images}/${suffix}`;
  },
};

export default Utils;

