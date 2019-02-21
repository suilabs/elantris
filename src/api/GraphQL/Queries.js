const projectFields = `
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
`;

const Queries = {
  getProjectByLanguage: lang => ({
    query: `
      query projects($language: String) {
          projectsByLanguage(lang: $language) {
            ${projectFields}
          }
      }
    `,
    variables: {
      language: lang,
    },
  }),
  getProjects: {
    old: '{ projects { key title subTitle coverImage { url } images { url text } types } }',
    new: `
      {
        projects {
          ${projectFields}
        }
      }
    `,
  },
  getTypes: '{ types { id name } }',
};

export default Queries;
