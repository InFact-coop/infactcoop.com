import React from 'react'
import styled from 'styled-components'
import wigglyBottom from '../assets/icons/wiggly_under_word.svg'

const CardTitle = styled.h1.attrs({
  className: 'font-4 ttu sans-serif',
})``

const CardSubTitle = styled.h2.attrs({
  className: 'font-2 b mb2 sans-serif',
})``

const CardBody = styled.p.attrs({
  className: 'font-4 mb2 sans-serif',
})``

const Card = styled.div.attrs({
  className: 'bg-white shadow-1 w-40-ns ph5-ns pv6-ns pa4 center',
})`
  width: 95%;
`

const CardButton = styled.button.attrs({
  className: 'font-3 sans-serif ttu b ph3 pv1 b--black',
})``

const CardHeading = ({ children }) => (
  <div className="mb2">
    <div className="mb2">{children}</div>
    <img src={wigglyBottom} alt="wiggle" />
  </div>
)

export { CardTitle, CardSubTitle, CardBody, Card, CardButton, CardHeading }
