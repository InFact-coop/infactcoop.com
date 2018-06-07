import React from 'react'
import styled from 'styled-components'
import { media, backgroundImage } from '../styles/style_utils'
import { SectionTitle } from './section'

import MediumIcon from '../assets/icons/medium.svg'
import GithubIcon from '../assets/icons/github.svg'
import LinkedInIcon from '../assets/icons/linkedin.svg'
import logo from '../assets/logos/infact_logo_white.svg'
import airplane from '../assets/icons/airplace_icn.svg'

const Title = styled(SectionTitle).attrs({
  className: 'highlight-custom white mb2 fw6',
})``

const Splash = styled.section.attrs({
  className: 'flex pt5-ns pb7-ns justify-center justify-start-l',
})`
  background: linear-gradient(
    225deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(50, 45, 55, 1) 100%
  );
  ${media.ns`
    height: 45vh;
  `};
`
const EmailSplash = styled.section.attrs({
  className: 'flex-column flex pv5-ns pv4 justify-center justify-start-l',
})`
  background: linear-gradient(
    225deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(50, 45, 55, 0.7) 100%
  );
`
const EmailTopline = styled.p.attrs({
  className: 'highlight-custom ttu tc reglo font-3-ns font-4 white mb2 mt0-ns',
})``

const EmailSecondLine = styled.p.attrs({
  className: 'highlight-custom ttu tc reglo font-1-ns font-2 white mb3',
})``

const Topline = styled.div.attrs({
  className:
    'flex flex-column flex-row-ns justify-between-ns items-start-ns items-center justify-center ph6-l pl3-m pr0-m mr0-ns ml4-l',
})`
  ${media.l`
  `} max-width: 1440px;
`
const ContactWrapper = styled.div.attrs({
  className: 'mt2',
})``

const ContactIcon = styled.a.attrs({
  className: 'dib link mr1 pointer',
})`
  width: 2.75rem;
  height: 2.75rem;
  background: ${({ imgUrl }) => backgroundImage(imgUrl || '')};
`

const FooterSection = styled.div.attrs({
  className:
    'highlight-custom w-80 w-40-l w-30-m white sans-serif font-4 tc tl-ns mr4-l mb4 mb0-ns',
})`
  min-width: 158px;

  & br {
    &::selection {
      background: #50cfcf;
      color: white;
    }
  }
`

const Logo = styled.div.attrs({
  className: 'mr3-m mr5-l mv4 mv0-ns',
})`
  ${media.l`
    width: 19rem;
    height: 6.5rem;
  `} ${media.m`
    width: 15rem;
    height: 5rem;
  `}
    width: 12rem;
  height: 4rem;
  background: ${backgroundImage(logo)};
`

const AirplaneIcon = styled.img.attrs({
  className: 'mt2',
})`
  &:hover {
    transform: rotate(5deg);
    transition: transform 0.15s;
  }
`

const Footer = () => (
  <div>
    <EmailSplash>
      <EmailTopline>Ready to collaborate?</EmailTopline>
      <EmailSecondLine>We would love to hear from you</EmailSecondLine>
      <EmailSecondLine className="light-green">
        hello@infactcoop.com
      </EmailSecondLine>
      <a className="tc">
        <AirplaneIcon src={airplane} alt="airplane" />
      </a>
    </EmailSplash>
    <Splash>
      <Topline>
        <Logo />
        <FooterSection>
          <Title>Address</Title>
          Space 4<br />
          First Floor<br />
          149 Fonthill Road<br />
          Finsbury Park<br />
          London<br />
        </FooterSection>
        <FooterSection>
          <Title>Connect</Title>
          Get in touch any way you like! <br />
          We LOVE meeting new people
          <ContactWrapper>
            <ContactIcon
              imgUrl={GithubIcon}
              href="https://github.com/infact-coop"
              target="_blank"
            />
            <ContactIcon imgUrl={LinkedInIcon} />
            <ContactIcon
              imgUrl={MediumIcon}
              href="https://medium.com/infactdigitalcoop"
              target="_blank"
            />
          </ContactWrapper>
        </FooterSection>
      </Topline>
    </Splash>
  </div>
)

export default { Footer }
