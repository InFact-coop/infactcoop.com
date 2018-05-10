import React from 'react'
import styled from 'styled-components'
import { media } from '../styles/style_utils'

import {
  CardTitle,
  CardSubTitle,
  CardBody,
  Card,
  CardButton,
  CardHeading,
} from './card'

import { Section, SectionTitle, SectionHeading, SectionButton } from './section'

import BackgroundImg from './background-img'

import stimmyThings from '../assets/images/stimmy_things_landing.svg'
import workshop from '../assets/images/LWC_PIC.png'

const Wrapper = styled.div.attrs({
  className: '',
})`
  ${media.ns`
    width: 46%;
  `};
`

const SectionCard = styled(Card).attrs({
  className: '',
})`
  transform: translateY(-2rem);
  ${media.ns`
    transform: translateY(-7rem);
  `};
`

const Picture = styled(BackgroundImg).attrs({
  className: '',
})`
  width: 100%;
  height: 50vh;
`

const OurWork = () => (
  <Section>
    <SectionHeading>
      <SectionTitle>Our Work</SectionTitle>
    </SectionHeading>

    <div className="flex flex-column flex-row-ns justify-between-ns">
      <Wrapper>
        <Picture src={stimmyThings} />
        <SectionCard>
          <CardHeading>
            <CardTitle>Mental Health</CardTitle>
          </CardHeading>
          <CardSubTitle>Stimmy Things</CardSubTitle>
          <CardBody>
            An app to help young people to deal better with ADHD.
          </CardBody>
        </SectionCard>
      </Wrapper>

      <Wrapper>
        <Picture src={workshop} />
        <SectionCard>
          <CardHeading>
            <CardTitle>Tech for Good</CardTitle>
          </CardHeading>
          <CardSubTitle>Cast Fellowship</CardSubTitle>
          <CardBody>
            A text that introduces our amazing work with CAST.
          </CardBody>
        </SectionCard>
      </Wrapper>
    </div>
    <div className="flex items-center justify-center">
      <SectionButton>See It All</SectionButton>
    </div>
  </Section>
)

export default OurWork
