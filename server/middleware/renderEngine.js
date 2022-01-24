import fs from 'fs';
import util from 'util';

const readFile = util.promisify(fs.readFile);

const renderHtmlWithParams = async (templatePath, params) => {
  let fileStr = await readFile(templatePath, 'utf8');
  const keywords = Object.keys(params);
  keywords.forEach((keyword) => {
    fileStr = fileStr.replace(`{{{${keyword}}}}`, params[keyword]);
  });
  return fileStr;
};

export default renderHtmlWithParams;
