import React from 'react'
import styled from 'styled-components'

import wigglyLeft from '../assets/icons/wiggly_left.svg'
import wigglyRight from '../assets/icons/wiggly_right.svg'

const SectionTile = styled.section.attrs({
  className: 'pa5-ns pv3 mv1 mv0-ns ph1',
})``

const Wrapper = styled.div.attrs({
  className: 'center',
})`
  max-width: 1201px;
`

const SectionTitle = styled.h1.attrs({
  className: 'font-4 font-3-ns sans-serif b ttu',
})``

const SectionButton = styled.button.attrs({
  className: 'font-4-ns font-5 sans-serif fw6 ttu ph4 pv2 white bn db center',
})`
  background: linear-gradient(
    to right,
    rgba(0, 156, 243, 0.8) 0%,
    rgba(22, 214, 217, 0.8) 100%
  );
`

const Section = ({ children, bgColor }) => (
  <SectionTile className={`bg-${bgColor}`}>
    <Wrapper>{children}</Wrapper>
  </SectionTile>
)

const SectionHeading = ({ children }) => (
  <div className="flex flex-row justify-center mb6-ns mb3 pb1 pb0-ns">
    <img src={wigglyLeft} alt="wiggle" />
    <div className="mh1">{children}</div>
    <img src={wigglyRight} alt="wiggle" />
  </div>
)

export { Section, SectionTitle, SectionHeading, SectionButton, Wrapper }
