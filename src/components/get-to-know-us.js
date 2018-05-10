import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { media } from '../styles/style_utils'

import {
  CardTitle,
  CardSubTitle,
  CardBody,
  Card,
  CardButton,
  CardHeading,
} from './card'

import {
  Section,
  SectionTitle,
  SectionBackgroundImg,
  SectionHeading,
} from './section'

import { BackgroundImg, BackgroundFilter } from './background-img'

import picOfUs from '../assets/images/get_to_know_us.png'

const SectionCard = styled(Card).attrs({
  className: 'absolute-ns top-0-ns right-0-ns w-40-ns',
})`
  max-height: 95%;
  transform: translateY(-2rem);
  ${media.ns`
    transform: translateY(0);
  `};
`

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background: radial-gradient(circle, #fa7d78 0%, #6114cc 100%);
`

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
  <Section>
    <SectionHeading>
      <SectionTitle>Get To Know Us</SectionTitle>
    </SectionHeading>

    <Wrapper>
      <Picture src={picOfUs}>
        <Overlay />
      </Picture>
      <SectionCard>
        <CardHeading>
          <CardTitle>Our Story</CardTitle>
        </CardHeading>
        <CardSubTitle>
          We are a small digital co-op that tackles big challenges.
        </CardSubTitle>
        <CardBody>
          We love what we do and love working with others who do too. We design
          and build solutions to real problems, getting to the heart of what
          matters.
        </CardBody>
        <CardButton>Tell me more</CardButton>
      </SectionCard>
    </Wrapper>
  </Section>
)

export default GetToKnowUs
