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
    const { hostname } = config[this.getEnvironment()].statics;
    return `${hostname}/${imagePath}`;
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
  getFeatureFlag(name) {
    if (!window.suilabs || !window.suilabs.queryParams) {
      return null;
    }
    if (!window.suilabs.featureFlags) {
      window.suilabs.featureFlags = window.suilabs.queryParams.get('featureFlags')
        .split(',')
        .reduce((accum, feature) => {
          const [key, value] = feature.split(':');
          accum[key] = value; // eslint-disable-line no-param-reassign
          return accum;
        }, {});
    }
    return window.suilabs.featureFlags[name];
  },
  isMobile() {
    return (window.suilabs && window.suilabs.isMobile) || false;
  },
};

export default Utils;

