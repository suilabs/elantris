
const Mutations = {
  insertProject: "mutation insertProject($project: ProjectInput!) { insertProject(project: $project) { key title }}",
  insertType: `
  mutation insertType($type: String!){
    insertProjectType(type: $type) {
      key
      name
    }
  }`
};

export default Mutations;
