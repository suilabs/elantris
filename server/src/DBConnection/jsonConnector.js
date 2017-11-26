import fs from 'fs';
import path from 'path';

import Utils from '../utils/utils';
import config from '../../config.json';

let dbjson;

const JSONDriver = {
  init: () => {
    const {dbRoot, databaseFileName} = JSONDriver.getVariables();
    
    /* istanbul ignore else: untestable */
    if (dbRoot === ':memory:') {
      dbjson = {};
    } else {
      dbjson = JSON.parse(fs.readFileSync(databaseFileName, {encoding: 'utf8'}));
    }

    /* istanbul ignore else */
    if (Utils.isEmptyObject(dbjson)) {
      dbjson = {
        projects: {},
        types: {
          type1: {
            "key": "type1",
            "name": "Imatge Corporativa"
          }
        }
      };
      JSONDriver.writeDB('Init DB');
    }
  },
  getVariables: () => {
    const env = process.env.ENV;
    const dbRoot = config[env].database.root;
    const storageFolder = dbRoot[0] === '/' ? dbRoot : path.join(__dirname, `../../${dbRoot}`);
    const databaseFileName = path.join(storageFolder, config[env].database.file);
    return {dbRoot, storageFolder, databaseFileName};
  },
  hasBeenStarted: () => {
    return dbjson !== null;
  },
  writeDB: /* istanbul ignore next */ (op) => {
    const {databaseFileName} = JSONDriver.getVariables();
    const dbString = JSON.stringify(dbjson);
    const date = new Date();
    fs.writeFile(`${databaseFileName}-${op}-${date}`, dbString, (err) => {
      if (err) {
        console.error(err);
      }
      fs.writeFile(databaseFileName, dbString, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('DB Updated');
        }
      })
    });
  },
  dumpDB: /* istanbul ignore next */ () => {
    return JSON.stringify(dbjson);
  },
  get: (object, filterFunc) => {
    JSONDriver.init();
    if (filterFunc) {
      return Object.keys(dbjson[object]).reduce((ac, key) => {
        const value = dbjson[object][key];
        if (filterFunc(value)) {
          ac.push(value);
        }
        return ac
      }, []);
    }
    return Object.values(dbjson[object]);
  },
  exists(object, element) {
    JSONDriver.init();
    return dbjson[object][element.key] !== undefined;
  },
  insert: (object, element, persist = true) => {
    JSONDriver.init();
    dbjson[object][element.key] = element;
    if (persist) {
      JSONDriver.writeDB(`Insert_${object}_${element.key}`);
    }
    return element.key;
  },
  update: (object, element, persist = true) => {
    JSONDriver.init();
    return JSONDriver.insert(object, element, persist);
  },
  delete: (object, element, persist = true) => {
    JSONDriver.init();
    delete dbjson[object][element.key];
    if (persist) {
      JSONDriver.writeDB(`Deleted_${object}_${element.key}`);
    }
  }
};

export default JSONDriver;
