import React from 'react'
import styled from 'styled-components'
import { media } from '../styles/style_utils'

import {
  CardTitle,
  CardSubTitle,
  CardBody,
  CardHeading,
  CardButtonWithLink,
} from './card'

import { Section, SectionTitle, SectionHeading, SectionButton } from './section'

import BackgroundImg from './background-img'

import stimmy_card from '../assets/images/card_images/stimmythings_card.svg'
import cast_card from '../assets/images/card_images/cast_card.png'
import lwc_card from '../assets/images/card_images/lwc_card.png'
import { PurpleOverlay } from './overlay'

const Wrapper = styled.div.attrs({
  className: 'relative flex-ns justify-center',
})`
  height: 100vh;
  ${media.ns`
  height: 90vh;
    width: 46%;
  `};
`

const SectionCard = styled.div.attrs({
  className:
    'bg-white shadow-5 absolute-ns ph4-ns pv4-ns pv4 ph3 center tc tl-ns',
})`
  ${media.ns`
height: 55%;
width: 90%;
bottom: 2rem;
  `} width: 95%;
  transform: translateY(-2rem);
`
const SectionText = styled(CardBody)`
  height: 30%;
  overflow-y: scroll;
`

const Picture = styled(BackgroundImg).attrs({
  className: 'w-100 h-50',
})``

const OurWork = ({ history }) => {
  const isHomePage = history.location.pathname === '/'
  const isWorkGallery = history.location.pathname === '/our-work'
  const currentPage = history.location.pathname

  const title = isHomePage || isWorkGallery ? 'Our Work' : 'More Work'
  const bgcolor = isHomePage ? 'light-gray' : 'white'

  return (
    <Section bg_color={bgcolor}>
      <SectionHeading mb>
        <SectionTitle>{title}</SectionTitle>
      </SectionHeading>

      <div className="flex-ns flex-column flex-row-ns justify-between-ns">
        {currentPage !== '/about-work-stimmy-things' && (
          <Wrapper>
            <Picture src={stimmy_card} />
            <SectionCard>
              <CardHeading>
                <CardTitle>Mental Health</CardTitle>
              </CardHeading>
              <CardSubTitle uppercase>Stimmy Things</CardSubTitle>
              <SectionText>
                Working in collaboration with young people, parents and
                clinicians, we designed and built an app that helps young people
                with ADHD to manage their symptoms.
              </SectionText>
              <CardButtonWithLink link="/about-work-stimmy-things">
                Read more
              </CardButtonWithLink>
            </SectionCard>
          </Wrapper>
        )}

        {currentPage !== '/about-work-cast' && (
          <Wrapper>
            <Picture src={cast_card}>
              <PurpleOverlay />
            </Picture>
            <SectionCard>
              <CardHeading>
                <CardTitle>Tech for Good</CardTitle>
              </CardHeading>
              <CardSubTitle uppercase>Blue Cross</CardSubTitle>
              <SectionText>
                We created an app for conscientious owners to find a loving new
                home for their pet.
              </SectionText>
              <CardButtonWithLink link="/about-work-cast">
                Read more
              </CardButtonWithLink>
            </SectionCard>
          </Wrapper>
        )}

        {currentPage !== '/about-work-bluecross' &&
          !isHomePage && (
            <Wrapper>
              <Picture src={workshop}>
                <PurpleOverlay />
              </Picture>
              <SectionCard>
                <CardHeading>
                  <CardTitle>Tech for Good</CardTitle>
                </CardHeading>
                <CardSubTitle uppercase>CAST Digital Fellowship</CardSubTitle>
                <SectionText>
                  We collaborated with CAST to support senior staff at
                  non-profits in becoming leaders of their organisation’s
                  digital development.
                </SectionText>
                <CardButtonWithLink link="/about-work-cast">
                  Read more
                </CardButtonWithLink>
              </SectionCard>
            </Wrapper>
          )}
      </div>
      {isHomePage && <SectionButton>See It All</SectionButton>}
    </Section>
  )
}

export default OurWork
