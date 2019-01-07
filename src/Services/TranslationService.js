import Utils from '../Utils';
import translationConfig from '../translations';

/**
 * Returns string translated to the current language
 * @return {translationConfig.ca} translated strings
 */
export default () => {
  const language = Utils.getCurrentLanguage();
  return translationConfig[language];
};

