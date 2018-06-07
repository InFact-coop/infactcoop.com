import styled from 'styled-components'
import { media } from '../styles/style_utils'
import Link from 'gatsby-link'

import { CardBody } from './card'

import BackgroundImg from './background-img'

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

export { Wrapper, Picture, Overlay, SectionCard, SectionText }
