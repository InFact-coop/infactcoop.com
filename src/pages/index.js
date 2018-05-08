import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="bg-light-gray">
    <h1 className="red bg-yellow mb4-ns">Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
