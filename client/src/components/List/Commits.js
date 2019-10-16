import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { commitsLatest } from '../../gql/commits'
import styled from 'styled-components'
import { greyLight } from '../Style/Settings'
import { StyledHeading3 } from '../Style/Heading'

const StyledCommits = styled.div`
  max-height: 400px;
  overflow-y: scroll;
  grid-column: 1 / 3;
`
const StyledCommitItem = styled.div`
  margin-bottom: 1rem;
  border-bottom: 1px solid ${greyLight};
  padding-bottom: 1rem;
  > * {
    margin-bottom: 0.5rem;
  }
`
const StyledCommitMessage = styled.div`
  font-weight: 500;
`
const StyledCommitTime = styled.div`
  font-size: 0.8rem;
`

class Commits extends Component {
  render() {
    return(
      <StyledCommits>
        <StyledHeading3>Latest commits</StyledHeading3>
        <Query query={commitsLatest}>
          {({loading, data}) => {
            if (loading) return 'Loading...'
            const commits = data.commits.commits
            return commits.map(commit =>
              <StyledCommitItem>
                <div>{commit.author}</div>
                <StyledCommitMessage>Message: {commit.message}</StyledCommitMessage>
                <div className="latest-commit__repository">Project: {commit.repository}</div>
                <StyledCommitTime>{commit.time}</StyledCommitTime>
              </StyledCommitItem>
            )
          }}
        </Query>
      </StyledCommits>
    )
  }
}

export default Commits