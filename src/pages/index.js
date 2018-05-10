import React from 'react'
import Link from 'gatsby-link'

import OurApproach from '../components/our-approach'
import GetToKnowUs from '../components/get-to-know-us'
import OurWork from '../components/our-work'
import FAC from '../components/fac'
import Clients from '../components/clients'

const IndexPage = () => (
  <div>
    <OurApproach />
    <OurWork />
    <Clients />
    <GetToKnowUs />
    <FAC />
  </div>
)

export default IndexPage
