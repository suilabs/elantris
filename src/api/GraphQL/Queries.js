
const Queries = {
  getProjects: `
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
        template {
            id
            name
            rows {
              id
              name
              type
            }              
        }
        configuration {
          component {
            id
          }
          value
        }
      }
    }
  `,
  getTypes: '{ types { id name } }',
};

export default Queries;
