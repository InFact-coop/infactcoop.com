import React from 'react'
import styled from 'styled-components'

import wigglyBottom from '../assets/icons/wiggly_under_word.svg'
import BackgroundImg from './background-img'
import { ZigZag } from './about-pages'

import { media } from '../styles/style_utils'

const CardName = styled.p.attrs({
  className: 'font-4 ttu sans-serif b black mb1',
})``

const CardImage = styled(BackgroundImg).attrs({
  className: 'shadow-5 mb1',
})`
  width: 100%;
  height: 100%;
`
const CardJobTitle = styled.p.attrs({
  className: 'font-5 ttu sans-serif black',
})``

const CardsWrapper = styled.div.attrs({
  className: 'flex justify-around w-100 flex-wrap',
})``

const CardWrapper = styled.div.attrs({
  className: 'w-25-ns w-80 mh3 mv5',
})`
  ${media.ns`
    height: 25vw;
  `};
  height: 80vw;
`

const AboutCard = (src, name, job) => (
  <CardWrapper>
    <CardImage src={src} />
    <CardName>{name}</CardName>
    <ZigZag src={wigglyBottom} />
    <CardJobTitle>{job}</CardJobTitle>
  </CardWrapper>
)

export default { AboutCard, CardsWrapper }
