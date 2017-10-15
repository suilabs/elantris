import Controller from 'sui-server/ModelController/ProjectType';
import Utils from 'sui-server/utils/utils';

const ProjectTypeResolver = {
  Query: {
    types(_) {
      return Controller.all();
    }
  },
  Mutation: {
    /**
     * @param {string} type
     * @returns ProjectType
     */
    insertProjectType(_, {type}) {
      const newType = new Controller({key: Utils.joinLowerCase(type), name: type});
      newType.save();
      return newType.object;
    },
    /**
     * @param {string} key
     * @returns {Int}
     */
    deleteProjectType(_, {key}) {
      const type = Controller.byKey(key);
      type.delete();
      return type.object;
    },
  }
};

export default ProjectTypeResolver;
