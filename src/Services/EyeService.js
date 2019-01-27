class EyeService {
  constructor() {
    this.enabled = typeof _paq !== 'undefined';
    if (!this.enabled) {
      return this;
    }
  }

  seePage() {
    if (this.enabled) {
      window._paq.push(['setDocumentTitle', document.title]); // eslint-disable-line no-underscore-dangle
      window._paq.push(['trackPageView']); // eslint-disable-line no-underscore-dangle
    }
  }
}

export default new EyeService();
