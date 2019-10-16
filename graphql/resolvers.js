const { Client } = require('@elastic/elasticsearch')

require('dotenv').config()

//Elasticsearch endpoint
const esClient = new Client({ node: process.env.ES_HOST })


// Resolvers
const resolvers = {
  Query: {
    commits: async (object, args, context, info) => {
      const res = await esClient.search({
        body: {
          from: 0, size: args.limit,
          query: {
            range: {
              timestamp: {
                gte: "now-" + args.lastNDays + "d/d",
                lte: "now/d"
              }
            }
          }
        }
      })
      const data = {
        total: res.body.hits.total,
        commits: res.body.hits.hits.map(commit => ({
          author: commit._source.author.name,
          message: commit._source.message,
          repository: commit._source.repository.name,
          time: commit._source.timestamp
        }))
      }
      return data   
    }
  }
}

module.exports = resolvers