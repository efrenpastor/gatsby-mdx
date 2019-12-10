import React from 'react'
import kebabCase from 'lodash/kebabCase'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
const TagsPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Layout>
    <h1 className='title'>Tags</h1>
    <nav className='tags are-medium'>
      {group.map((tag, i) => (
        <Link key={i} className='tag is-link is-light' to={`/tags/${kebabCase(tag.fieldValue)}`}>
          {tag.fieldValue} ({tag.totalCount})
        </Link>
      ))}
    </nav>
  </Layout>
)

export default TagsPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
