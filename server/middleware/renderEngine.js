import fs from 'fs';
import util from 'util';

const readFile = util.promisify(fs.readFile);

const renderHtmlWithParams = (templatePath, params) => new Promise(async (resolve, reject) => {
  try {
    let fileStr = await readFile(templatePath, 'utf8');
    const keywords = Object.keys(params);
    keywords.forEach((keyword) => {
      fileStr = fileStr.replace(`{{{${keyword}}}}`, params[keyword]);
    });
    resolve(fileStr);
  } catch (err) {
    reject(err);
  }
});

export default renderHtmlWithParams;
