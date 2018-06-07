import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Header from '../containers/header'
import OurApproach from '../components/our-approach'
import GetToKnowUs from '../components/get-to-know-us'
import FAC from '../components/fac'
import Clients from '../components/clients'
import { SplashImg } from '../components/splash'
import {
  Section,
  SectionTitle,
  SectionHeading,
  SectionButton,
} from '../components/section'
import { CardTitle, CardSubTitle, CardHeading } from '../components/card'
import {
  Wrapper,
  Picture,
  Overlay,
  SectionCard,
  SectionText,
} from '../components/work-card'

import landing_header from '../assets/images/header_images/landing_header2.jpg'
import bluecross_card from '../assets/images/card_images/bluecross_card.png'
import stimmy_card from '../assets/images/card_images/stimmythings_card.svg'

const WorkLink = styled(SectionButton.withComponent(Link)).attrs({
  className: 'no-underline w-20-ns w-80 tc',
})``

const IndexPage = () => (
  <div>
    <Header image={landing_header} splash={SplashImg}>
      We're a design & development co-operative helping to shape a better
      digital future
    </Header>
    <OurApproach />
    <Section bg_color="white">
      <SectionHeading mb>
        <SectionTitle>Our Work</SectionTitle>
      </SectionHeading>

      <div className="flex-ns flex-column flex-row-ns justify-between-ns">
        <Wrapper to="/our-work/stimmy-things">
          <Picture src={stimmy_card}>
            <Overlay background="linear-gradient(-225deg, rgba(0, 0, 0, 0.3) 0%, rgba(50, 45, 55, 0.3) 100%)" />
          </Picture>
          <SectionCard>
            <CardHeading>
              <CardTitle>Mental Health</CardTitle>
            </CardHeading>
            <CardSubTitle uppercase>Stimmy Things</CardSubTitle>
            <SectionText>
              Working in collaboration with young people, parents and
              clinicians, we designed and built an app that helps young people
              with ADHD to manage their symptoms.
            </SectionText>
          </SectionCard>
        </Wrapper>

        <Wrapper to="/our-work/bluecross">
          <Picture src={bluecross_card}>
            <Overlay background="linear-gradient(-225deg, rgba(0, 0, 0, 0.3) 0%, rgba(50, 45, 55, 0.3) 100%)" />
          </Picture>
          <SectionCard>
            <CardHeading>
              <CardTitle>Tech for Good</CardTitle>
            </CardHeading>
            <CardSubTitle uppercase>Blue Cross</CardSubTitle>
            <SectionText>
              We created an app for conscientious owners to find a loving new
              home for their pet.
            </SectionText>
          </SectionCard>
        </Wrapper>
      </div>
      <WorkLink to="/our-work">See It All</WorkLink>
    </Section>
    <Clients />
    <GetToKnowUs />
    <FAC />
  </div>
)

export default IndexPage
