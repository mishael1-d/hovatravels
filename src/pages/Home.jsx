import React from 'react'
import AppBanner from '../components/AppBanner/AppBanner'
import Content from '../components/Content/Content'
import Flights from '../components/FlightDisplay/Flights'
import Hero from '../components/HeroSection/Hero'
import Hotels from '../components/HotelDisplay/Hotels'
import Information from '../components/Information/Information'
import Newsletter from '../components/Newsletter/Newsletter'
import Why from '../components/Why/Why'

function Home() {
  return (
    <>
    <Hero/>
    <Why />
    <Flights/>
    <Hotels />
    <AppBanner/>
    <Content/>
    <Newsletter/>
    <Information/>
    </>
  )
}

export default Home