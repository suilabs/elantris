import fs from 'fs';
import path from 'path';
import sha1 from 'sha1';

import Utils from 'sui-server/utils/utils';
import config from 'sui-server/config/config.json';

let dbjson;

const JSONDriver = {
    init: () => {
      const env = process.env.ENV;
      const dbRoot = config[env].database.root;

      /* istanbul ignore else: untestable */
      if (dbRoot === ':memory:') {
        dbjson = {};
      } else {
        const storageFolder = dbRoot[0] === '/' ? dbRoot : path.join(__dirname, `../../dbRoot}`);

        const databaseFileName = path.join(storageFolder, `${config[env].database.file}`);

        dbjson = JSON.parse(fs.readFileSync(databaseFileName, {encoding: 'utf8'}));
      }

      /* istanbul ignore else */
      if (Utils.isEmptyObject(dbjson)) {
        dbjson = {
          order: [],
          projects: {},
          types: {type1: 'Imatge Corporativa'},
          images: {}
        }
      }
    },
    writeDB: /* istanbul ignore next */ (op) => {
        const dbString = JSON.stringify(dbjson);
        fs.writeFile(`${databaseFileName}-${op}-${new Date}`, dbString, (err) => {
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
    _createId: /* istanbul ignore next */ (m) => {
      return sha1(m).substr(1,10);
    },
    getOrderedProjects: () => {
        return dbjson.order.map((idProject) => {
            return {...dbjson.projects[idProject]};
        })
    },
    getProjects: () => {

    },
    insertProject: (projectObj) => {
        // for the moment all images will be considered different, for simplicity
        dbjson.order.push(projectObj.key);
        const imagesKeys = projectObj.images.map(JSONDriver.saveImage);
        projectObj.images = imagesKeys;
        projectObj.coverImage = JSONDriver.saveImage(projectObj.coverImage);
        // there is no need to transform the types, as they will be already there
        dbjson.projects[projectObj.key] = projectObj;
        JSONDriver.writeDB('insertProject');
        return projectObj;
    },
    saveImage: ({name, url, text}) => {
      const key = JSONDriver._createId(name);
      dbjson.images[key] = {name, url, text};
      return key;
    },
    setOrder: (newOrder) => {
      dbjson.order = newOrder;
      JSONDriver.writeDB('setOrder');
      return JSONDriver.getOrderedProjects();
    }
};

export default JSONDriver;
