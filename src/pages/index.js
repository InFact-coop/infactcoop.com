import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { media } from '../styles/style_utils'

import Header from '../containers/header'
import OurApproach from '../components/our-approach'
import GetToKnowUs from '../components/get-to-know-us'
import FAC from '../components/fac'
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
import { LinkImage } from '../components/link-image'

import landing_header from '../assets/images/header_images/landing_header2.jpg'
import bluecross_card from '../assets/images/card_images/bluecross_card.png'
import stimmy_card from '../assets/images/card_images/stimmythings_card.svg'

import annaFreud from '../assets/images/partner_logos/anna_freud.png'
import bluecross from '../assets/images/partner_logos/bluecross.png'
import cast from '../assets/images/partner_logos/cast.png'
import lcn from '../assets/images/partner_logos/lcn.png'
import nhs from '../assets/images/partner_logos/nhs.png'
import qsa from '../assets/images/partner_logos/qsa.png'

const WorkLink = styled(SectionButton.withComponent(Link)).attrs({
  className: 'no-underline w-20-l w-40-m w-80 tc',
})``

const Splash = SplashImg.extend`
  background-position: 73%;
  ${media.m`
    background-position: 86%;
  `};
  ${media.l`
    background-position: 67%;
  `};
`

const IndexPage = () => (
  <div>
    <Header image={landing_header} splash={Splash}>
      We're a design & development co-operative helping to shape a better
      digital future
    </Header>
    <OurApproach />

    <Section bg_color="light-gray">
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

    <Section bg_color="white">
      <SectionHeading mb>
        <SectionTitle>InFact works with</SectionTitle>
      </SectionHeading>
      <div className="flex justify-center flex-wrap justify-between-l mb7-l">
        <LinkImage
          src={nhs}
          width="6rem"
          href="http://www.slam.nhs.uk/"
          target="_blank"
        />
        <LinkImage
          src={cast}
          width="14rem"
          target="_blank"
          href="http://www.wearecast.org.uk/"
        />
        <LinkImage
          src={annaFreud}
          width="17rem"
          target="_blank"
          href="https://www.annafreud.org/"
        />
        <LinkImage
          src={bluecross}
          width="5em"
          target="_blank"
          href="https://www.bluecross.org.uk/"
        />
        <LinkImage
          src={lcn}
          width="10rem"
          target="_blank"
          href="http://www.lawcentres.org.uk/"
        />
        <LinkImage
          src={qsa}
          width="5rem"
          target="_blank"
          href="https://www.quakersocialaction.org.uk/"
        />
      </div>
    </Section>
    <GetToKnowUs />
    <FAC />
  </div>
)

export default IndexPage
