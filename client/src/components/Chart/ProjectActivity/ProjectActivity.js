import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory'
import styled from 'styled-components'
import { StyledHeading3 } from '../../Style/Heading'

const StyledProjectActivity = styled.div`
  text-align: center;
`

/**
 * ProjectActivity component,
 * visualizes the most active projects
 * @param {array} activeProjects - returns the most active projects in an array of objects
 */
function ProjectActivity(props) {
  return (
    <StyledProjectActivity>
      <StyledHeading3>Activity by project</StyledHeading3>
      
      <VictoryChart 
        domainPadding={15}
        animate={{
          duration: 2000,
        }}
      >
        <VictoryAxis
          label="Project"  
        />

        <VictoryAxis
          dependentAxis
          label="Commits"
          style={{
            paddingLeft: 30
          }}
        />

        <VictoryBar
          alignment="start"
          style={{ 
            data: { 
              fill: "grey"
            }, 
            labels: {
              fontSize: 10,
              angle: -15,
              padding: 10,
              textAnchor: 'start'
            },
          }}
          data={props.activeProjects}
        />

      </VictoryChart>
    </StyledProjectActivity>
  ) 
}

export default ProjectActivity
