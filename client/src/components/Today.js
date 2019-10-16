import React from 'react'

function Today() {
  let today = new Date().toLocaleDateString()
  return(
    <h1>{today}</h1>
  )
}

export default Today
