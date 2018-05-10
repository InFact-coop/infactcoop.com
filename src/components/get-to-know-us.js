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

import { BackgroundImg, BackgroundFilter } from './background-img'

import picOfUs from '../assets/images/get_to_know_us.png'

const SectionCard = styled(Card)`
  position: absolute;
  right: 0;
  z-index: 2;
  transform: translate(-3rem, -1rem);
`

const GetToKnowUs = () => (
  <Section>
    <SectionHeading>
      <SectionTitle>Get To Know Us</SectionTitle>
    </SectionHeading>

    <BackgroundFilter>
      <BackgroundImg src={picOfUs}>
        <SectionCard>
          <CardHeading>
            <CardTitle>Our Story</CardTitle>
          </CardHeading>
          <CardSubTitle>
            We are a small digital co-op that tackles big challenges.
          </CardSubTitle>
          <CardBody>
            We love what we do and love working with others who do too. We
            design and build solutions to real problems, getting to the heart of
            what matters.
          </CardBody>
          <CardButton>Tell me more</CardButton>
        </SectionCard>
      </BackgroundImg>
    </BackgroundFilter>
  </Section>
)

export default GetToKnowUs
