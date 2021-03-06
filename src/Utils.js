import config from './config.json';
import routeConfig from './routeConfig';
import CookieService from './Services/CookieService';

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
  getAWSProjectImagePath(suffix = '') {
    const { hostname } = config.aws;
    return `${hostname}/${suffix}`;
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
  getSupportedLanguages() {
    return config.supportedLanguages;
  },
  getCurrentLanguage() {
    const lang = CookieService.getPlainCookie('suiLanguage') ||
      (window.suilabs || {}).language ||
      ((window.location || {}).pathname || '').split('/')[1];
    if (lang.length !== 2) {
      return config.defaultLanguage;
    }
    return lang;
  },
  getDefaultLanguage() {
    return config.defaultLanguage;
  },
  setIsSSR(value) {
    this.ssr = value;
  },
  isSSR() {
    return this.ssr;
  },
};

export default Utils;
