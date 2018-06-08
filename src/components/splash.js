import styled, { css } from 'styled-components'
import { SplashBase } from './header'

const PurpleBackgroundSplash = styled(SplashBase)`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 90vh;

  ${({ src }) =>
    css`
      background-image: radial-gradient(
          circle,
          rgba(250, 125, 120, 0.4) 0%,
          rgba(97, 20, 204, 0.4) 100%
        ),
        url(${src});
    `};
`

const BlueBackgroundSplash = styled(SplashBase)`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 90vh;

  ${({ src }) =>
    css`
      background-image: radial-gradient(
          circle,
          rgba(0, 156, 243, 0.4) 0%,
          rgba(22, 214, 217, 0.4) 100%
        ),
        url(${src});
    `};
`
const YellowBackgroundSplash = styled(SplashBase)`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 90vh;

  ${({ src }) =>
    css`
      background-image: linear-gradient(
          90deg,
          rgba(22, 214, 217, 0.27) 0%,
          rgba(150, 204, 41, 0.27) 100%
        ),
        url(${src});
    `};
`

const SplashGradient = SplashBase.extend`
  height: 90vh;
  background: linear-gradient(
    0deg,
    rgba(0, 156, 243, 1) 0%,
    rgba(22, 214, 217, 1) 100%
  );
`

const SplashImg = SplashBase.extend`
  height: 90vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${({ src }) =>
    css`
      background-image: url(${src});
    `};
`

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.3;
`

const PurpleOverlay = styled(Overlay)`
  background: radial-gradient(circle, #fa7d78 0%, #6114cc 100%);
`
const BlueOverlay = styled(Overlay)`
  background: radial-gradient(circle, #009cf3 0%, #16d6d9 100%);
`
const YellowOverlay = styled(Overlay)`
  background: linear-gradient(90deg, #16d6d9 0%, #96cc29 100%);
`
export {
  PurpleOverlay,
  BlueOverlay,
  YellowOverlay,
  PurpleBackgroundSplash,
  BlueBackgroundSplash,
  YellowBackgroundSplash,
  SplashGradient,
  SplashImg,
}
