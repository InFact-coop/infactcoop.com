import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

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

import BackgroundImg from './background-img'

import postIts from '../assets/images/our_approach.png'

const Wrapper = styled.div.attrs({
  className: 'relative',
})`
  height: 54vh;
  min-height: 600px;
`

const SectionCard = styled(Card).attrs({
  className: 'absolute top-0 left-0',
})`
  max-height: 95%;
`

const Picture = styled(BackgroundImg).attrs({
  className: 'absolute bottom-0 right-0',
})`
  height: 95%
  width: 95%
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
