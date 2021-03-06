import styled, { css } from 'styled-components'
import { media } from '../styles/style_utils'

import BackgroundImg from './background-img'

const LinkImage = styled(BackgroundImg).attrs(({ className }) => ({
  className: `${className} h4 ma1 ma2-m ma0-l dib link pointer grow`,
}))`
  transition: 0.3s !important;
  background-size: contain;
  width: 40%;
  ${media.ns`
    width: ${({ width }) => width};
  `};
  ${({ grayscale }) =>
    grayscale &&
    css`
      filter: grayscale(100%);
      &:hover {
        filter: grayscale(0%);
      }
    `};
`

export { LinkImage }
