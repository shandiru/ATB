import React from 'react'
import RepairHeader from '../components/Repair.jsx/RepairHeader'
import RepairAbout from '../components/Repair.jsx/RepairAbout'
import RepairStatsSection from '../components/Repair.jsx/RepairService'
import Cta from "../components/common/cta"

const Repair = () => {
  return (
    <div>
      <RepairHeader />
      <RepairAbout />
      <RepairStatsSection />
      <Cta />
    </div>
  )
}

export default Repair
