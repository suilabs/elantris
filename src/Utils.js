import config from './config.json';
import routeConfig from './routeConfig.json';

const getCssFromNode = (element, property) =>
  window.getComputedStyle(element).getPropertyValue(property);
const getCssFromString = () => {
  throw Error('Not Implemented');
};

const Utils = {
  mobile: false,
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
    const { hostname } = config.api;
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
  getAWSProjectImagePath(suffix = '', options) {
    const { hostname } = config.aws;
    return {
      url: `${hostname}/${suffix}`,
      thumbnailUrl: options.thumbnail
        ? `${hostname}/thumbnail/${suffix}`
        : null,
      smallUrl: `${hostname}/small/${suffix}`,
    };
  },
  getFeatureFlag(name, defaultValue) {
    if (!window.suilabs || !window.suilabs.featureFlags) {
      return defaultValue;
    }
    return window.suilabs.featureFlags[name] || defaultValue;
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
    return this.getRouteConfig(route).title;
  },
  getMetaDescription(route) {
    return this.getRouteConfig(route).metaDescription;
  },
  routeExists(route) {
    return !!routeConfig[route];
  },
  getRouteConfig(route) {
    if (this.routeExists(route)) {
      return routeConfig[route];
    }
    return routeConfig.notFound;
  },
  setIsSSR(value) {
    this.ssr = value;
  },
  isSSR() {
    return this.ssr;
  },
};

export default Utils;
