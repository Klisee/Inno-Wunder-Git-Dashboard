import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { orange } from './Settings'

const StyledNavUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`
const StyledNavLi = styled.li`
  margin-right: 1.5rem;
`
const LinkStyle = {
  color: orange
}

function Navigation() {
  return(
    <nav>
      <StyledNavUl>
        <StyledNavLi>
          <Link style={LinkStyle}>Home</Link>
        </StyledNavLi>
      </StyledNavUl>
    </nav>
  )
}

export default Navigation
