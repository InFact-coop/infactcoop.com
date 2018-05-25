import React from 'react'
import styled from 'styled-components'
import { media } from '../styles/style_utils'

import {
  CardTitle,
  CardSubTitle,
  CardBody,
  Card,
  CardButtonWithLink,
  CardHeading,
} from './card'

import { Section, SectionTitle, SectionHeading } from './section'

import BackgroundImg from './background-img'

import { BlueOverlay } from './overlay'

import fac from '../assets/images/we_love_fac.png'

const Wrapper = styled.div.attrs({
  className: 'relative-ns',
})`
  ${media.ns`
    height: 54vh;
    min-height: 600px;
  `};
`

const SectionCard = styled(Card).attrs({
  className: 'absolute-ns top-0-ns left-0-ns',
})`
  max-height: 95%;
  transform: translateY(-2rem);
  ${media.ns`
    transform: translateY(0);
    width: 40%;
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
  <Section bg_color="mid-gray">
    <SectionHeading>
      <SectionTitle>
        <div className="flex flex-column flex-row-ns tc">
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
        <CardSubTitle>One of the best exeriences of our lives.</CardSubTitle>
        <CardBody>
          Founders & Coders is a UK-based non-profit organization that runs a
          tuition-fee coding academy in London. All members of InFact co-op
          graduated from the programme and our story begins with the Founders &
          Coders community.
        </CardBody>
        <CardButtonWithLink link="https://foundersandcoders.com/">
          Read More
        </CardButtonWithLink>
      </SectionCard>
    </Wrapper>
  </Section>
)

export default FAC
