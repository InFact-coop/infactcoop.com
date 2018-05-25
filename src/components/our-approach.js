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

const OurApproach = () => (
  <Section bg_color="mid-gray">
    <SectionHeading>
      <SectionTitle>Our Approach</SectionTitle>
    </SectionHeading>

    <Wrapper>
      <Picture src={postIts} />
      <SectionCard>
        <CardHeading>
          <CardTitle>Approach</CardTitle>
        </CardHeading>
        <CardSubTitle>
          Putting the user at the heart of the creative process
        </CardSubTitle>
        <CardBody>
          We value learning over guessing. We will get to know you and your
          users so we can build the best product for your needs.
        </CardBody>
        <CardButtonWithLink link="/our-approach">
          Tell me more
        </CardButtonWithLink>
      </SectionCard>
    </Wrapper>
  </Section>
)

export default OurApproach
