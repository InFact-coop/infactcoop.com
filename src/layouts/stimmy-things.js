import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../containers/header'

import '../styles/index.scss'

const AppWrapper = styled.div.attrs({
  className: 'bg-white center',
})`
  max-width: 1440px;
`

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div className="bg-white">
      <AppWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>{children()}</div>
      </AppWrapper>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery1 {
    site {
      siteMetadata {
        title
      }
    }
  }
`
