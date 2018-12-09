
const Queries = {
  getProjects: {
    old: '{ projects { key title subTitle coverImage { url } images { url text } types } }',
    new: `
      {
        projects {
          id
          url
          name
          cover {
              name
              url
          }
          description
          type {
              id
              name
          }
          section {
              id
              name
          }
          configuration {
            componentId
            propsJson
          }
        }
      }
    `,
  },
  getTypes: '{ types { id name } }',
};

export default Queries;
