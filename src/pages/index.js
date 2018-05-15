import React from 'react'

import OurApproach from '../components/our-approach'
import GetToKnowUs from '../components/get-to-know-us'
import OurWork from '../components/our-work'
import FAC from '../components/fac'
import Clients from '../components/clients'

const IndexPage = ({ history }) => (
  <div>
    <OurApproach />
    <OurWork history={history} />
    <Clients />
    <GetToKnowUs />
    <FAC />
  </div>
)

export default IndexPage
