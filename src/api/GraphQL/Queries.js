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
  languages
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
  getProjects: `
    {
      projects {
        ${projectFields}
      }
    }
  `,
  getTypes: '{ types { id name } }',
};

export default Queries;
