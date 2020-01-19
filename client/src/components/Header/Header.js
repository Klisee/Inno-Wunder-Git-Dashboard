import React from 'react'
import styled from 'styled-components'
import logo from '../../wunder-logo.svg'
import { grey } from '../Style/Settings'
import { StyledHeading1 } from '../Style/Heading'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: ${grey};
`
const StyledLogoWrapper = styled.div`
  padding: 1rem;
`
const StyledLogo = styled.a`
  display: block;
  width: 200px;
  height: 70px;
  background-image: url(${logo});
  background-repeat: no-repeat;
`
/**
 * Header component
 */
function Header() {
  return (
    <StyledHeader>
      <StyledLogoWrapper>
        <StyledLogo href="/"/>
      </StyledLogoWrapper>
      <StyledHeading1>Git Dashboard</StyledHeading1>
    </StyledHeader>
  )
}

export default Header