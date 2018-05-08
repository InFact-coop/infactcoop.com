import React from 'react'
import styled from 'styled-components'

import wigglyLeft from '../assets/icons/wiggly_left.svg'
import wigglyRight from '../assets/icons/wiggly_right.svg'

const SectionTile = styled.section.attrs({
  className: 'pa7 bg-mid-gray',
})``

const Wrapper = styled.div.attrs({
  className: 'center',
})`
  max-width: 1201px;
`

const SectionTitle = styled.h1.attrs({
  className: 'font-3 b ttu',
})``

const Section = ({ children }) => (
  <SectionTile>
    <Wrapper>{children}</Wrapper>
  </SectionTile>
)

const SectionHeading = ({ children, prop }) => (
  <div className="flex flex-row justify-center mb7">
    <img src={wigglyLeft} alt="wiggle" />
    <div className="mh1">{children}</div>
    <img src={wigglyRight} alt="wiggle" />
  </div>
)

export { Section, SectionTitle, SectionHeading }
