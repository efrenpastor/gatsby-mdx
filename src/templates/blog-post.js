import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PrevNext from '../components/prevnext'
import Seo from '../components/seo'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { siteUrl } from '../../config/env'
import path from 'path'

export default (props) => {
  const { title } = props.data.mdx.frontmatter
  const { excerpt, body } = props.data.mdx
  const { previous, next, slug } = props.pageContext
  const canonical = path.join(siteUrl + slug)

  return (
    <Layout>
      <Seo title={title} description={excerpt} canonical={canonical} />
      <div>
        <h1>{title}</h1>
        <MDXRenderer>{body}</MDXRenderer>
        <PrevNext previous={previous && previous} next={next && next} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      body
      excerpt
      frontmatter {
        title
      }
    }
  }
`