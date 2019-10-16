import React from 'react'
import styled from 'styled-components'
import { greyLight } from './Style/Settings'

const StyledDateSort = styled.div`
  margin-top: 2rem;
`
const StyledDateSortLabel = styled.span`
  margin-right: 1rem;
  font-weight: bold;
`
const StyledDateSortButton = styled.button`
  margin-right: 1rem;
  padding: .8rem 1.5rem;
  border-radius: 3px;
  border: none;
  background-color: ${greyLight};
  font-weight: bold;
`

function DateSort(props) {
  return (
    <StyledDateSort>
      <StyledDateSortLabel>Sort by:</StyledDateSortLabel>
      <StyledDateSortButton onClick={props.commitsToday}>Day</StyledDateSortButton>
      <StyledDateSortButton onClick={props.commitsThisWeek}>Week</StyledDateSortButton>
    </StyledDateSort>
  )
}

export default DateSort
