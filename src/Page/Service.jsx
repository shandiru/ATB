import React from 'react'
import ServiceHeader from '../components/ServiceFunction/ServiceHeader'
import ServiceAbout from '../components/ServiceFunction/ServiceAbout'
import ServiceStatsSection from '../components/ServiceFunction/ServiceService'
import Cta from "../components/ServiceFunction/ServiceEnd"

const Service = () => {
  return (
    <div>
      <ServiceHeader />
      <ServiceAbout />
      <ServiceStatsSection />
      <Cta />
    </div>
  )
}

export default Service
