import React from 'react'
import styled from 'styled-components'
import { media } from '../styles/style_utils'

import {
  CardTitle,
  CardSubTitle,
  CardBody,
  Card,
  CardHeading,
  CardButtonWithLink,
} from './card'

import { Section, SectionTitle, SectionHeading, SectionButton } from './section'

import BackgroundImg from './background-img'

import stimmyThings from '../assets/images/stimmy_things_landing.svg'
import workshop from '../assets/images/LWC_PIC.png'
import { PurpleOverlay } from './overlay'

const Wrapper = styled.div.attrs({
  className: 'relative flex justify-center',
})`
  height: 90vh;
  ${media.ns`
    width: 46%;
  `};
`

const SectionCard = styled(Card).attrs({
  className: 'absolute',
})`
  bottom: 3rem;
`

const Picture = styled(BackgroundImg).attrs({
  className: '',
})`
  width: 100%;
  height: 60%;
`

const OurWork = ({ history }) => {
  const isHomePage = history.location.pathname === '/'

  const title = isHomePage ? 'Our Work' : 'More Work'
  const bgcolor = isHomePage ? 'light-gray' : 'white'

  return (
    <Section bg_color={bgcolor}>
      <SectionHeading>
        <SectionTitle>{title}</SectionTitle>
      </SectionHeading>

      <div className="flex flex-column flex-row-ns justify-between-ns">
        <Wrapper>
          <Picture src={stimmyThings} />
          <SectionCard>
            <CardHeading>
              <CardTitle>Mental Health</CardTitle>
            </CardHeading>
            <CardSubTitle uppercase>Stimmy Things</CardSubTitle>
            <CardBody>
              An app to help young people to deal better with ADHD.
            </CardBody>
            <CardButtonWithLink link="/about-work-stimmy-things">
              Read more
            </CardButtonWithLink>
          </SectionCard>
        </Wrapper>

        <Wrapper>
          <Picture src={workshop}>
            <PurpleOverlay />
          </Picture>
          <SectionCard>
            <CardHeading>
              <CardTitle>Tech for Good</CardTitle>
            </CardHeading>
            <CardSubTitle uppercase>Cast Fellowship</CardSubTitle>
            <CardBody>
              A text that introduces our amazing work with CAST.
            </CardBody>
            <CardButtonWithLink link="/about-work-cast">
              Read more
            </CardButtonWithLink>
          </SectionCard>
        </Wrapper>
      </div>
      {isHomePage && <SectionButton>See It All</SectionButton>}
    </Section>
  )
}

export default OurWork
