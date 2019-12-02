import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
export default ({ data }) => (
  <Layout>
    <h1>404 - {data.site.siteMetadata.title}</h1>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
