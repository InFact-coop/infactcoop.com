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

import { BackgroundImg } from './background-img'

import postIts from '../assets/images/our_approach.png'

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

const OurApproach = () => (
  <Section>
    <SectionHeading>
      <SectionTitle>Our Approach</SectionTitle>
    </SectionHeading>

    <Wrapper>
      <Picture src={postIts} />
      <SectionCard>
        <CardHeading>
          <CardTitle>Approach</CardTitle>
        </CardHeading>
        <CardSubTitle>We are agile, open source and user centred.</CardSubTitle>
        <CardBody>
          We value learning over guessing, we want to work on stuff that really
          matters and we will always strive for positive change.
        </CardBody>
        <CardButton>Tell me more</CardButton>
      </SectionCard>
    </Wrapper>
  </Section>
)

export default OurApproach
