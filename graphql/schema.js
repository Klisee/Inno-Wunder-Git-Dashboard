const { gql } = require('apollo-server')

// TypesDefs
const typeDefs = gql`
  type Commit {
    author: String
    message: String
    repository: String
    time: String
  }

  type Commits {
    total: Int
    commits: [Commit]
  }

  type Query {
    commits(lastNDays: String!, limit: Int!): Commits
  }
`

module.exports = typeDefs