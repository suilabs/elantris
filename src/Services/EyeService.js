/* eslint-disable no-underscore-dangle */
class EyeService {
  constructor() {
    this.enabled = typeof _paq !== 'undefined';
    if (!this.enabled) {
      return this;
    }
  }

  seePage() {
    if (this.enabled) {
      window._paq.push(['setDocumentTitle', document.title]);
      window._paq.push(['trackPageView']);
    }
  }

  seeClick(category, name) {
    if (this.enabled) {
      window._paq.push(['trackEvent', category, name]);
    }
  }
}

export default new EyeService();
