import React from 'react'

import Header from '../containers/header'
import OurApproach from '../components/our-approach'
import GetToKnowUs from '../components/get-to-know-us'
import OurWork from '../components/our-work'
import FAC from '../components/fac'
import Clients from '../components/clients'
import { SplashImg } from '../components/splash'

import landing_header from '../assets/images/header_images/landing_header2.jpg'

const IndexPage = ({ history }) => (
  <div>
    <Header image={landing_header} splash={SplashImg}>
      We're a design & development co-operative helping to shape a better
      digital future
    </Header>
    <OurApproach />
    <OurWork history={history} />
    <Clients />
    <GetToKnowUs />
    <FAC />
  </div>
)

export default IndexPage
