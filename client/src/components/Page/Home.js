import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import CommitCount from '../CommitCount'
import Commits from '../List/Commits'
import ProjectActivity from '../Chart/ProjectActivity'
import DateSort from '../DateSort'
import styled from 'styled-components'
import { commitsToday, commitsThisWeek } from '../../gql/commits'
import { StyledHeading2 } from '../Style/Heading';

const StyledHomeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 2rem;
  margin-top: 2rem;
`

// GraphQL endpoint
const client = new ApolloClient({
  uri: "http://localhost:4000/",
});

// The texts used on home page
const commitsTodayText = 'Commits today'
const commitsThisWeekText = 'Commits this week'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      commitText: commitsTodayText,
      commitCount: '',
      ActiveProjects: null
    }

    this.commits = this.commits.bind(this);
  }

  commits(query, commitText) {
    client.query({ query: query })
      .then(res => {
        const { commits, total } = res.data.commits
  
        // Add the repositories in an object and add the occurances count
        const repoOccurances = commits.reduce((obj, v) => {
          obj[v.repository] = (obj[v.repository] || 0) + 1;
          return obj;
        }, {})

        // Add the occurances in an array of objects
        const repos = Object.keys(repoOccurances).map(key => {
          return {
            y: repoOccurances[key],
            label: key
          }
        })

        // Sort the data by y's numeric value
        const reposSorted = repos.sort((a, b) => { 
          return b.y- a.y;
        })

        // Get the first 10 from the array
        const data = reposSorted.slice(0, 10)

        // Set the final value to state
        this.setState({
          commitText,
          commitCount: total,
          activeProjects: data
        })
    })
  }

  // Show today's commits by default
  componentDidMount() {
    this.commits(commitsToday, commitsTodayText)
  }

  render() {
    return (
      <>
        <StyledHeading2>Commit activity</StyledHeading2>
        <DateSort 
          commitsToday={() => this.commits(commitsToday, commitsTodayText)}
          commitsThisWeek={() => this.commits(commitsThisWeek, commitsThisWeekText)}
        />
        <StyledHomeWrapper>
          <CommitCount 
            commitText={this.state.commitText}
            commitCount={this.state.commitCount}
          />
          <ProjectActivity activeProjects={this.state.activeProjects}/>
          <Commits/>
        </StyledHomeWrapper>
      </>
    )
  }
}

export default Home
