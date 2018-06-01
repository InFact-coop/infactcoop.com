import React from 'react'
import styled from 'styled-components'
import { media, backgroundImage } from '../styles/style_utils'
import logo from '../assets/logos/infact_logo_white.svg'
import { SectionTitle } from './section'
import MediumIcon from '../assets/icons/medium.svg'
import GithubIcon from '../assets/icons/github.svg'
import LinkedInIcon from '../assets/icons/linkedin.svg'

const Title = styled(SectionTitle).attrs({
  className: 'white mb2 fw6',
})``

const Splash = styled.section.attrs({
  className: 'flex pt5-ns pb7-ns justify-center justify-start-l',
})`
  ${media.ns`
    height: 40vh;
  `} clear: left;
  background: linear-gradient(225deg, #000000 0%, #322d37 100%);
`
const EmailSplash = styled(Splash).attrs({
  className: 'flex-column o-70',
})`
  clear: left;
  background: linear-gradient(225deg, #000000 0%, #322d37 100%);
`
const EmailTopline = styled.p.attrs({
  className: 'ttu tc reglo font-3-ns font-4 white mb2 mt0-ns mt2',
})``

const EmailSecondLine = styled.p.attrs({
  className: 'ttu tc reglo font-1-ns font-2 white mb3',
})``

const EmailBlue = styled(EmailSecondLine)`
  color: #50cfcf;
`

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
    'w-80 w-40-l w-30-m white sans-serif font-4 tc tl-ns mr4-l mb4 mb0-ns',
})`
  min-width: 158px;
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

const Footer = () => (
  <div>
    <EmailSplash>
      <EmailTopline>Ready to collaborate?</EmailTopline>
      <EmailSecondLine>We would love to hear from you</EmailSecondLine>
      <EmailBlue>hello@infactcoop.com</EmailBlue>
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
              imgUrl={MediumIcon}
              href="https://medium.com/infactdigitalcoop"
              target="_blank"
            />
            <ContactIcon
              imgUrl={GithubIcon}
              href="https://github.com/infact-coop"
              target="_blank"
            />
            <ContactIcon imgUrl={LinkedInIcon} />
          </ContactWrapper>
        </FooterSection>
      </Topline>
    </Splash>
  </div>
)

export default { Footer }
