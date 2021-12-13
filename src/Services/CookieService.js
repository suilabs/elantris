import CookieParser from 'cookie';

const getCookies = () => {
  if (typeof document !== 'undefined' && 'cookie' in document) {
    return CookieParser.parse(document.cookie);
  }
  return '';
};

const CookieService = {
  getPlainCookie(cookieName) {
    let cookie = getCookies()[cookieName];
    if (cookie) {
      cookie = decodeURIComponent(cookie);
    }
    return cookie;
  },
  getJSONCookie(cookieName) {
    let cookie = this.getPlainCookie(cookieName);
    if (cookie) {
      cookie = JSON.parse(cookie);
    }
    return cookie || {};
  },
  putSessionCookie(cookieName, cookieValue) {
    document.cookie = CookieParser.serialize(
      cookieName,
      encodeURIComponent(cookieValue),
      {
        path: '/',
      },
    );
  },
  putSessionJSONCookie(cookieName, jsonValue) {
    this.putSessionCookie(cookieName, JSON.stringify(jsonValue));
  },
};

export default CookieService;
