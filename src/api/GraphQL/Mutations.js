
const Mutations = {
  insertProject: "mutation insertProject($project: ProjectInput!) { insertProject(project: $project) { key \n title }}"
};

export default Mutations;
