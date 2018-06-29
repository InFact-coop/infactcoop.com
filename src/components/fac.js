import React from 'react'
import styled from 'styled-components'
import { media } from '../styles/style_utils'

import {
  CardTitle,
  CardSubTitle,
  SectionCardBody,
  ExternalCardButtonWithLink,
  CardHeading,
  SectionCard,
} from './card'

import { Section, SectionTitle, SectionHeading } from './section'

import BackgroundImg from './background-img'

import { BlueOverlay } from './splash'

import fac from '../assets/images/card_images/fac_card.png'

const Wrapper = styled.div.attrs({
  className: 'relative-ns',
})`
  ${media.ns`
    height: 54vh;
    min-height: 600px;
  `};
`

const Picture = styled(BackgroundImg).attrs({
  className: 'absolute-ns bottom-0-ns right-0-ns',
})`
  width: 100%;
  height: 50vh;
  ${media.ns`
    height: 95%
    width: 95%
  `};
`

const FAC = () => (
  <Section bg_color="white">
    <SectionHeading mb>
      <SectionTitle>
        <div className="tc dn db-ns">We love Founders & Coders</div>
        <div className="dn-ns tc">
          <span>We love</span>
          <span className="pre"> Founders </span>
          <span>& Coders</span>
        </div>
      </SectionTitle>
    </SectionHeading>

    <Wrapper>
      <Picture src={fac}>
        <BlueOverlay />
      </Picture>
      <SectionCard>
        <CardHeading>
          <CardTitle>Our Story</CardTitle>
        </CardHeading>
        <CardSubTitle>One of the best experiences of our lives.</CardSubTitle>
        <SectionCardBody>
          Founders & Coders is a UK-based nonprofit organization that runs a
          tuition free coding academy in London. All members of InFact coop
          graduated from the programme and our story begins with the Founders &
          Coders community.
        </SectionCardBody>
        <ExternalCardButtonWithLink link="https://foundersandcoders.com/">
          Read More
        </ExternalCardButtonWithLink>
      </SectionCard>
    </Wrapper>
  </Section>
)

export default FAC
