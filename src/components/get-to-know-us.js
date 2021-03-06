import React from 'react'
import styled from 'styled-components'
import { media } from '../styles/style_utils'

import {
  CardTitle,
  CardSubTitle,
  SectionCardBody,
  CardButtonWithLink,
  CardHeading,
  SectionCard,
} from './card'

import { Section, SectionTitle, SectionHeading } from './section'

import BackgroundImg from './background-img'

import { PurpleOverlay } from './splash'

import aboutus_card from '../assets/images/card_images/aboutus_card.jpg'

const Picture = styled(BackgroundImg).attrs({
  className: 'absolute-ns bottom-0-ns left-0-ns',
})`
  width: 100%;
  height: 50vh;
  ${media.ns`
    height: 95%;
    width: 95%;
  `};
`

const Wrapper = styled.div.attrs({
  className: 'relative-ns',
})`
  ${media.ns`
    height: 54vh;
    min-height: 600px;
  `};
`

const GetToKnowUs = () => (
  <Section bg_color="mid-gray">
    <SectionHeading mb>
      <SectionTitle>Get To Know Us</SectionTitle>
    </SectionHeading>

    <Wrapper>
      <Picture src={aboutus_card}>
        <PurpleOverlay />
      </Picture>
      <SectionCard className="right-0-ns">
        <CardHeading>
          <CardTitle>Our Story</CardTitle>
        </CardHeading>
        <CardSubTitle>
          We are a small digital co-op tackling big challenges.
        </CardSubTitle>
        <SectionCardBody>
          We love what we do and love working with others who do too. We design
          and build solutions to real problems, getting to the heart of what
          matters.
        </SectionCardBody>
        <CardButtonWithLink link="/about-us">Tell me more</CardButtonWithLink>
      </SectionCard>
    </Wrapper>
  </Section>
)

export default GetToKnowUs
