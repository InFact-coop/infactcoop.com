import React from 'react'
import styled from 'styled-components'
import wigglyBottom from '../assets/icons/wiggly_under_word.svg'

const CardTitle = styled.h1.attrs({
  className: 'font-4-ns font-5 ttu sans-serif',
})``

const CardSubTitle = styled.h2.attrs({
  className: 'font-2-ns font-3 b mb2-ns mb1 sans-serif',
})`
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'inherit')};
`

const CardBody = styled.p.attrs({
  className: 'font-4-ns font-5 mb3 sans-serif',
})``

const Card = styled.div.attrs({
  className: 'bg-white shadow-5 ph5-ns pv6-ns pv4 ph3 center tc tl-ns',
})`
  width: 95%;
`

const CardButton = styled.button.attrs({
  className: 'font-3-ns font-4 sans-serif ttu b ph3 pv1 b--black bg-white',
})`
  cursor: pointer;
`

const CardButtonWithLink = ({ children, link }) => (
  <a className="" href={link}>
    <CardButton>{children}</CardButton>
  </a>
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
}
