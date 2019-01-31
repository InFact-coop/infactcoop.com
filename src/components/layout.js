import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import '../styles/index.scss'
import  Footer from './footer'
import faviconAppleTouchIcon from '../assets/logos/favicon/favicon-original.png'
import faviconMaskIcon from '../assets/logos/favicon/favicon.svg'
import favicon64 from '../assets/logos/favicon/favicon_forweb/favicon-64x64.png'
import favicon32 from '../assets/logos/favicon/favicon_forweb/favicon-32x32.png'
import favicon16 from '../assets/logos/favicon/favicon_forweb/favicon-16x16.png'
import faviconIco from '../assets/logos/favicon/favicon_forweb/favicon.ico'
import { StaticQuery, graphql } from 'gatsby'

const AppWrapper = styled.div.attrs({
  className: 'bg-light-gray center',
})`
  max-width: 1440px;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'We are a design & development digital co-operative using technology in service of humans and nature.',
            },
            {
              name: 'keywords',
              content:
                'digital, technology, tech, charity, charities, co-op, coop, cooperative, tech for good, founders and coders',
            },
          ]}
        >
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={faviconAppleTouchIcon}
          />
          <link rel="mask-icon" href={faviconMaskIcon} color="#5bbad5" />
          <link rel="icon" type="image/png" sizes="64x64" href={favicon64} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
          <link rel="shortcut icon" href={faviconIco} />
        </Helmet>
        <div className="bg-light-gray">
          <AppWrapper>
            <div>{children}</div>
            <Footer />
          </AppWrapper>
        </div>
      </div>
    )}
  />
)

export default Layout
