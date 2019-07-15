import React from 'react'
import SummaryList from "./SummaryList"

const Recents = (props) => {
  return (
    <div>
      <h2>Recents</h2>
      <SummaryList type={props.type} />
    </div>
  )
}

export default Recents
