import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import '../styles/index.scss'

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
        </AppWrapper>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

Layout.defaultProps = {
  children: <div />,
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
