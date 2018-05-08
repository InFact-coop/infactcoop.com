import React from 'react'
import styled from 'styled-components'
import wigglyBottom from '../assets/icons/wiggly_under_word.svg'

const CardTitle = styled.h1.attrs({
  className: 'font-4 ttu',
})``

const CardSubTitle = styled.h2.attrs({
  className: 'font-2 b mb3',
})``

const CardBody = styled.p.attrs({
  className: 'font-4 mb3',
})``

const Card = styled.div.attrs({
  className: 'bg-white shadow-1 w-33 ph6 pv7',
})``

const CardButton = styled.button.attrs({
  className: 'font-3 ttu b ph4 pv2 b--black',
})``

const CardHeading = ({ children }) => (
  <div className="mb3">
    <div className="mb3">{children}</div>
    <img src={wigglyBottom} alt="wiggle" />
  </div>
)

export { CardTitle, CardSubTitle, CardBody, Card, CardButton, CardHeading }
