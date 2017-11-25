
const Queries = {
  getProjects: "{ projects { key title subTitle coverImage { url } images { url text } types } }",
  getTypes: `{ types { key name } }`
};

export default Queries;
