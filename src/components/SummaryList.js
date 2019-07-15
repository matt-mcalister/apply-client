import React from "react"
import {connect} from "react-redux"
import SummaryItem from "./SummaryItem"


const SummaryList = ({type, recentOrganizations, recentCompanies}) => {
  let list = type === "ORGANIZATION" ? recentOrganizations : recentCompanies
  return (
    <div>
      {list.map(item => <SummaryItem key={item.id} item={item} type={type} />)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    recentOrganizations: state.organizations.recents,
    recentCompanies: []
  }
}

export default connect(mapStateToProps)(SummaryList)
