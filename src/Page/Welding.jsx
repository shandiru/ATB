import React from 'react'
import WeldingHeader from '../components/Welding/WeldingHeader'
import WeldingAbout from '../components/Welding/WeldingAbout'
import WeldingStatsSection from '../components/Welding/WeldingService'
import WeldingEnd from '../components/Welding/WeldingEnd'

const Welding = () => {
  return (
    <div>
      <WeldingHeader />
      <WeldingAbout />
      <WeldingStatsSection />
      <WeldingEnd />
    </div>
  )
}

export default Welding
