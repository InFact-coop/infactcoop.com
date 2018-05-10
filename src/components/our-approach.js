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

import { BackgroundImg } from './background-img'

import postIts from '../assets/images/our_approach.png'

const SectionCard = styled(Card)`
  transform: translate(-3rem, -1rem);
`

const OurApproach = () => (
  <Section>
    <SectionHeading>
      <SectionTitle>Our Approach</SectionTitle>
    </SectionHeading>

    <BackgroundImg src={postIts}>
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
    </BackgroundImg>
  </Section>
)

export default OurApproach
