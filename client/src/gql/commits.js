import gql from 'graphql-tag';

// TODO: Add an actual date picker to UI and refactor the queries to suppor that
const commitsLatest = gql`
  query {
    commits(lastNDays: "1", limit: 10) {
      commits {
        author
        message
        repository
        time
      }
    }
  }
`

const commitsToday = gql`
  query {
    commits(lastNDays: "1", limit: 10000) {
      total
      commits {
        repository
      }
    }
  }
`

const commitsThisWeek = gql`
  query {
    commits(lastNDays: "7", limit: 10000) {
      total
      commits {
        repository
      }
    }
  }
`

export { commitsLatest, commitsToday, commitsThisWeek }