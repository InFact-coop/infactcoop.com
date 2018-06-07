import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { media } from '../styles/style_utils'

import wigglyBottom from '../assets/icons/wiggly_under_word.svg'

const CardTitle = styled.h1.attrs({
  className: 'highlight-custom font-4-ns font-5 ttu sans-serif',
})``

const CardSubTitle = styled.h2.attrs({
  className: 'highlight-custom font-2-ns font-3 b mb2-ns mb1 sans-serif',
})`
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'inherit')};
`

const CardBody = styled.p.attrs({
  className: 'highlight-custom font-4-ns font-5 mb3 sans-serif',
})``

const Card = styled.div.attrs({
  className:
    'highlight-custom bg-white shadow-5 ph5-l pv6-l pa4-m pv4 ph3 center tc tl-ns',
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
    width: 60%;
  `};
  ${media.l`
    transform: translateY(0);
    width: 40%;
  `};
`

const CardButton = styled.button.attrs({
  className:
    'bg-animate hover-white hover-bg-black font-3-ns font-4 sans-serif ttu b ph3 pv1 b--black bg-white',
})`
  cursor: pointer;
`

const CardButtonWithLink = ({ children, link }) => (
  <Link to={link}>
    <CardButton>{children}</CardButton>
  </Link>
)
const CardHeading = ({ children }) => (
  <div className="mb2-ns mb1">
    <div className="mb2-ns mb1">{children}</div>
    <img src={wigglyBottom} alt="wiggle" />
  </div>
)

export {
  CardTitle,
  CardSubTitle,
  CardBody,
  Card,
  CardButtonWithLink,
  CardHeading,
  SectionCard,
}
