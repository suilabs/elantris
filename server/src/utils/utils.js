const Utils = {
  isEmptyObject: (obj) => {
    return !Object.keys(obj).length;
  },
  joinLowerCase: (str) => {
    return str.replace(/ /g, '-').toLowerCase();
  }
};

export default Utils;
