import React from 'react'
import styled from 'styled-components'
import { media } from '../styles/style_utils'
import Link from 'gatsby-link'

import { CardTitle, CardSubTitle, CardHeading, CardBody } from './card'

import { Section, SectionTitle, SectionHeading, SectionButton } from './section'

import BackgroundImg from './background-img'

import stimmy_card from '../assets/images/card_images/stimmythings_card.svg'
import cast_card from '../assets/images/card_images/cast_card.png'
import bluecross_card from '../assets/images/card_images/bluecross_card.png'

const Overlay = styled.div.attrs({
  className: 'absolute w-100 pointer',
})`
  height: 100%;
  background: ${({ background }) => background};
  opacity: 0;
  transition: 0.5s;
`
const Picture = styled(BackgroundImg).attrs({
  className: 'w-100 h-50',
})`
  transition: 0.5s;
`
const SectionCard = styled.div.attrs({
  className:
    'bg-white shadow-5 absolute-ns ph4-ns pv4-ns pv4 ph3 center tc tl-ns pointer',
})`
  ${media.ns`
    height: 48%;
    margin-bottom: 7%;
    width: 90%;
    bottom: 2rem;
  `};
  width: 95%;
  transition: 0.5s;
`

const Wrapper = styled(Link).attrs({
  className: 'relative flex-ns justify-center black',
})`
  height: 100vh;
  transition: 0.5s;

  ${media.ns`
  height: 90vh;
    width: 46%;
  `}
  &:hover ${Picture} {
    transform: translateY(0.5rem) scale(1.05);
    transition: 0.5s;
  }
  &:hover ${SectionCard} {
    transform: translateY(-2rem);
    transition: 0.7s;
  }
  &:hover ${Overlay} {
    opacity: 1;
    transition: 0.5s;
  }

  overflow-y: scroll;
`
const SectionText = styled(CardBody)`
  height: 30%;
`

const WorkLink = styled(SectionButton.withComponent(Link)).attrs({
  className: 'no-underline w-20-ns w-80 tc',
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
        {currentPage !== '/our-work/stimmy-things' && (
          <Wrapper to="/our-work/stimmy-things">
            <Picture src={stimmy_card}>
              <Overlay background="linear-gradient(-225deg, rgba(0, 0, 0, 0.3) 0%, rgba(50, 45, 55, 0.3) 100%)" />
            </Picture>
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
            </SectionCard>
          </Wrapper>
        )}

        {currentPage !== '/our-work/bluecross' && (
          <Wrapper to="/our-work/bluecross">
            <Picture src={bluecross_card}>
              <Overlay background="linear-gradient(-225deg, rgba(0, 0, 0, 0.3) 0%, rgba(50, 45, 55, 0.3) 100%)" />
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
            </SectionCard>
          </Wrapper>
        )}

        {currentPage !== '/our-work/cast' &&
          !isHomePage && (
            <Wrapper to="/our-work/cast">
              <Picture src={cast_card}>
                <Overlay background="linear-gradient(-225deg, rgba(0, 0, 0, 0.3) 0%, rgba(50, 45, 55, 0.3) 100%)" />
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
              </SectionCard>
            </Wrapper>
          )}
      </div>
      {isHomePage && <WorkLink to="/our-work">See It All</WorkLink>}
    </Section>
  )
}

export default OurWork
