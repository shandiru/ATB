import React from 'react'
import RepairHeader from '../components/Repair.jsx/RepairHeader'
import RepairAbout from '../components/Repair.jsx/RepairAbout'
import RepairStatsSection from '../components/Repair.jsx/RepairService'
import RepairEnd from '../components/Repair.jsx/RepairEnd'

const Repair = () => {
  return (
    <div>
      <RepairHeader />
      <RepairAbout />
      <RepairStatsSection />
      <RepairEnd />
    </div>
  )
}

export default Repair
