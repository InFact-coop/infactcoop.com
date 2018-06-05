import React from 'react'
import styled from 'styled-components'

import wigglyLeft from '../assets/icons/wiggly_left.svg'
import wigglyRight from '../assets/icons/wiggly_right.svg'

const SectionTile = styled.section.attrs({
  className: 'pa5-ns pv3 mv0-ns ph1',
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
  className:
    'font-4-ns hover-blue font-5 sans-serif fw6 ttu ph4 pv2 white bn db center',
})`
  border: 1px solid transparent;
  border-image: linear-gradient(
    to right,
    rgba(0, 156, 243, 0.8) 0%,
    rgba(22, 214, 217, 0.8) 100%
  );
  border-image-slice: 1;
  background: linear-gradient(
    to right,
    rgba(0, 156, 243, 0.8) 0%,
    rgba(22, 214, 217, 0.8) 100%
  );
  z-index: 100;
  background-size: 100%;
  cursor: pointer;
  position: relative;
  z-index: 100;

  &:before {
    background-image: linear-gradient(#fff, #fff);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    z-index: -100;
    transition: opacity 0.15s ease;
  }

  &:hover {
    &:before {
      opacity: 1;
    }
`

const Section = ({ children, bg_color }) => (
  <SectionTile className={`bg-${bg_color}`}>
    <Wrapper>{children}</Wrapper>
  </SectionTile>
)

const SectionHeading = ({ children, mb }) => {
  const classes = `flex flex-row justify-center mb2 pb1 pb0-ns ${
    mb ? 'mb5-ns' : ''
  }`

  return (
    <div className={classes}>
      <img src={wigglyLeft} alt="wiggle" />
      <div className="mh1">{children}</div>
      <img src={wigglyRight} alt="wiggle" />
    </div>
  )
}

export { Section, SectionTitle, SectionHeading, SectionButton, Wrapper }
