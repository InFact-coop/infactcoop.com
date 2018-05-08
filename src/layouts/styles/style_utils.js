import { css } from 'styled-components'

const media = {
  ns: (...args) => css`
    @media screen and (min-width: 40em) {
      ${css(...args)};
    }
  `,
  m: (...args) => css`
    @media screen and (min-width: 40em) and (max-width: 60em) {
      ${css(...args)};
    }
  `,
  l: (...args) => css`
    @media screen and (min-width: 60em) {
      ${css(...args)};
    }
  `,
}

export default { media }
