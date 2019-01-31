import React from 'react'
import { Link }  from 'gatsby'
import styled from 'styled-components'
import { media } from '../styles/style_utils'

import wigglyBottom from '../assets/icons/wiggly_under_word.svg'

const CardTitle = styled.h1.attrs({
  className: 'font-4-l font-6-m font-5 ttu sans-serif',
})``

const CardSubTitle = styled.h2.attrs({
  className: 'font-2-l font-4-m font-3 b mb2-l mb1 sans-serif',
})`
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'inherit')};
`

const CardBody = styled.p.attrs({
  className: 'font-4-l font-6-m font-5 sans-serif',
})``

const SectionCardBody = styled(CardBody).attrs({
  className: 'mb3',
})``

const Card = styled.div.attrs({
  className: 'bg-white shadow-5 ph5-l pv6-l pa3-m ph3 pv4 center tc tl-ns',
})`
  width: 95%;
`
const SectionCard = styled(Card).attrs({
  className: 'absolute-ns top-0-ns',
})`
  max-height: 95%;
  transform: translateY(-2rem);
  ${media.m`
    transform: translateY(0);
    width: 40vw;
  `};
  ${media.l`
    transform: translateY(0);
    width: 40%;
  `};
`

const CardButton = styled.button.attrs({
  className:
    'bg-animate hover-white hover-bg-black font-3-l font-4 font-6-m sans-serif ttu b ph3 pv1 b--black bg-white',
})`
  cursor: pointer;
`

const CardButtonWithLink = ({ children, link }) => (
  <Link to={link}>
    <CardButton>{children}</CardButton>
  </Link>
)

const ExternalCardButtonWithLink = ({ children, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <CardButton>{children}</CardButton>
  </a>
)
const CardHeading = ({ children }) => (
  <div className="mb2-l mb1">
    <div className="mb2-l mb1">{children}</div>
    <img src={wigglyBottom} alt="wiggle" />
  </div>
)

export {
  CardTitle,
  CardSubTitle,
  CardBody,
  Card,
  CardButtonWithLink,
  ExternalCardButtonWithLink,
  CardHeading,
  SectionCard,
  SectionCardBody,
}
