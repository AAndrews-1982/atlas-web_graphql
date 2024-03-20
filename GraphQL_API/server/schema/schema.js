const graphql = require('graphql');

const TaskType = new graphql.GraphQLObjectType({
  name: 'Task',
  fields: () => ({
    id: { type: graphql.GraphQLID },
    title: { type: graphql.GraphQLString },
    weight: { type: graphql.GraphQLInt },
    description: { type: graphql.GraphQLString },
    project: {
      type: TaskType,
      resolve(parent, args) {
        return Project.findById(parent.projectId);
      }
    }
  })
});
