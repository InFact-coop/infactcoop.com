import styled from 'styled-components'
import { media } from '../styles/style_utils'

import BackgroundImg from './background-img'

const LinkImage = styled(BackgroundImg.withComponent('a')).attrs({
  className: 'h4 ma1 ma0-ns mb0-ns dib link pointer',
})`
  background-size: contain;
  width: 40%;
  ${media.ns`
    width: ${({ width }) => width};
  `};
`

export { LinkImage }
