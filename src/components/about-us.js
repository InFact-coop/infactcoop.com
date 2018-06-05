import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'

import wigglyBottom from '../assets/icons/wiggly_under_word.svg'

import { media } from '../styles/style_utils'

const CardName = styled.p.attrs({
  className: 'font-4 ttu sans-serif b black mb1',
})``

const CardImage = styled.img.attrs({
  className: 'db bg-center aspect-ratio--object',
})`
  ${props => {
    return css`
      z-index: 0;
      background-image: url ${props.src};
      background-size: cover !important;
    `
  }};
`

const CardJobTitle = styled.p.attrs({
  className: 'font-5 ttu sans-serif black',
})``

const CardsWrapper = styled.section.attrs({
  className: 'cf w-100 pv2-ns ph6-ns pa2 mb4',
})``

const CardWrapper = styled.article.attrs({
  className: 'fl w-100 pt3-ns ph2-ns pb2-ns',
})`
  ${media.ns`
width: 33.3%;
`};
  ${media.m`
width: 50%;
`};
`

const ZigZag = styled.img.attrs({
  className: 'mb1',
})``

const AboutCard = (src, name, job) => (
  <CardWrapper>
    <div className="aspect-ratio aspect-ratio--1x1 mb2">
      <CardImage src={src} />
    </div>
    <a href="#0" className="ph2 ph0-ns pb3 link db">
      <CardName>{name}</CardName>
      <ZigZag src={wigglyBottom} />
      <CardJobTitle>{job}</CardJobTitle>
    </a>
  </CardWrapper>
)

export default { AboutCard, CardsWrapper }
