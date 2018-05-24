import React from 'react'

import Header from '../containers/header'
import OurApproach from '../components/our-approach'
import GetToKnowUs from '../components/get-to-know-us'
import OurWork from '../components/our-work'
import FAC from '../components/fac'
import { Footer } from '../components/footer'
import Clients from '../components/clients'

const IndexPage = ({ history }) => (
  <div>
    <Header>InFact is the most awesome co-op you will ever work with.</Header>
    <OurApproach />
    <OurWork history={history} />
    <Clients />
    <GetToKnowUs />
    <FAC />
    <Footer />
  </div>
)

export default IndexPage
