import React from 'react'
import styled from 'styled-components'
import { orange, greyLight } from '../Style/Settings'
import { StyledHeading3 } from '../Style/Heading'

const StyledCommitCount = styled.div`
  text-align: center;
`

// TODO: Re-think naming convention to avoid overly long names
const StyledCommitCountNumber = styled.div`
  font-size: 4rem;
  border: 1px solid ${orange};
  display: inline-block;
  border-radius: 50%;
  padding: 100px;
  background: ${greyLight};
`

/**
 * CommitCount component
 * @param {string} commitText - The descriptive text
 * @param {int} commitCount - The actual commit count
 */
function CommitCount(props) {
  return (
    <StyledCommitCount>
      <StyledHeading3>{props.commitText}</StyledHeading3>
      <StyledCommitCountNumber>{props.commitCount}</StyledCommitCountNumber>
    </StyledCommitCount>
  )
}

export default CommitCount
