//import ImageBox from './ImageBox';


const Project = `
type Project {
  key: String!
  title: String!
  subTitle: String!
  coverImage: String!
  type: ProjectType!
  images: [ImageBox]
}`;

const resolvers = {
  Query: {
    project(_, {id}) {
      return {};
    },
  },
};

export default {
  schema: Project,
  resolver: resolvers
};
