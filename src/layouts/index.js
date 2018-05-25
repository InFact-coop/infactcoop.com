import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import '../styles/index.scss'
import { Footer } from '../components/footer'

const AppWrapper = styled.div.attrs({
  className: 'bg-light-gray center',
})`
  max-width: 1440px;
`

const Layout = ({ children, data }) => {
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <div className="bg-light-gray">
        <AppWrapper>
          <div>{children()}</div>
          <Footer />
        </AppWrapper>
      </div>
    </div>
  )
}

export default Layout

// eslint-disable-next-line
export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
