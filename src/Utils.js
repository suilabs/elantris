import config from './config.json';
import routeConfig from './routeConfig';

const getCssFromNode = (element, property) =>
  window.getComputedStyle(element).getPropertyValue(property);
const getCssFromString = () => {
  throw Error('Not Implemented');
};

const Utils = {
  mobile: false,
  isNewBackendEnabled() {
    return Utils.getFeatureFlag('newBackend') === 'true';
  },
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
    const { hostname } = config.statics;
    return `${hostname}/${imagePath}`;
  },
  getAPIPath() {
    const hostname = this.isNewBackendEnabled() ? 'https://v2.hathsin.suilabs.com' : config.api.hostname;
    const { path } = config.api;
    return `${hostname}/${path}`;
  },
  getStaticPath() {
    const { hostname } = config.statics;
    return hostname;
  },
  getStaticImagesPath(suffix = '') {
    const { hostname, images } = config.statics;
    return `${hostname}/${images}/${suffix}`;
  },
  getAWSImagesPath(suffix = '') {
    const { hostname, images } = config.aws;
    return `${hostname}/${images}/${suffix}`;
  },
  getFeatureFlag(name) {
    if (!window.suilabs || !window.suilabs.featureFlags) {
      return null;
    }
    return window.suilabs.featureFlags[name];
  },
  getQueryParam(name) {
    if (!window.suilabs || !window.suilabs.queryParams) {
      return null;
    }
    return window.suilabs.queryParams.get(name);
  },
  getBooleanParam(name) {
    return this.getQueryParam(name) === 'true';
  },
  isMobile() {
    return this.mobile;
  },
  setIsMobile(b) {
    this.mobile = b;
  },
  getPageTitle(route) {
    return routeConfig[route].title;
  },
};

export default Utils;
