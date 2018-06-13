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
import { YellowOverlay } from './splash'

import approach_card from '../assets/images/card_images/approach_card.jpg'

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

const OurApproach = () => (
  <Section bg_color="mid-gray">
    <SectionHeading mb>
      <SectionTitle>Our Approach</SectionTitle>
    </SectionHeading>

    <Wrapper>
      <Picture src={approach_card}>
        <YellowOverlay />
      </Picture>
      <SectionCard>
        <CardHeading>
          <CardTitle>Approach</CardTitle>
        </CardHeading>
        <CardSubTitle>
          Putting the user at the heart of the creative process
        </CardSubTitle>
        <SectionCardBody>
          We value learning over guessing. We will get to know you and your
          users so we can build the best product for your needs.
        </SectionCardBody>
        <CardButtonWithLink link="/our-approach">
          Tell me more
        </CardButtonWithLink>
      </SectionCard>
    </Wrapper>
  </Section>
)

export default OurApproach
