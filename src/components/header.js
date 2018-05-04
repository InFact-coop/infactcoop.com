import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Splash = styled.section.attrs({
  className: 'h5 white heading',
})`
  background: linear-gradient(0deg, #009cf3 0%, #16d6d9 100%);
`

const Header = ({ siteTitle }) => <Splash>{siteTitle}</Splash>

export default Header
