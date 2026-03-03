import React from 'react'
import WeldingHeader from '../components/Welding/WeldingHeader'
import WeldingAbout from '../components/Welding/WeldingAbout'
import WeldingStatsSection from '../components/Welding/WeldingService'
import Cta from "../components/Welding/WeldingEnd"

const Welding = () => {
  return (
    <div>
      <WeldingHeader />
      <WeldingAbout />
      <WeldingStatsSection />
      <Cta />
    </div>
  )
}

export default Welding
