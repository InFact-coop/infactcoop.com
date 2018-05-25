import React from 'react'

import Header from '../containers/header'
import OurApproach from '../components/our-approach'
import GetToKnowUs from '../components/get-to-know-us'
import OurWork from '../components/our-work'
import FAC from '../components/fac'
import Clients from '../components/clients'

const IndexPage = ({ history }) => (
  <div>
    <Header>
      We're a design & development co-operative helping to shape a better
      digital future.
    </Header>
    <OurApproach />
    <OurWork history={history} />
    <Clients />
    <GetToKnowUs />
    <FAC />
  </div>
)

export default IndexPage
