import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PrevNext from '../components/prevnext'
import Seo from '../components/seo'
import Tags from '../components/tags'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { siteUrl } from '../../config/env'
const url = require('../../utils/url')

export default (props) => {
  const { title, tags } = props.data.mdx.frontmatter
  const { excerpt, body } = props.data.mdx
  const { previous, next, slug } = props.pageContext
  const canonical = url.join(siteUrl, slug)
  const amphtml = url.join(siteUrl, '/amp/', slug)

  return (
    <Layout>
      <Seo title={title} description={excerpt} canonical={canonical} amphtml={amphtml} />
      <div>
        <h1>{title}</h1>
        <Tags tags={tags} />
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
        tags
      }
    }
  }
`
