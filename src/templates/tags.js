import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Card from '../components/card'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with '${tag}'`

  return (
    <Layout>
      <h1 className='title'>{tagHeader}</h1>
      <div className='columns is-multiline'>
        {edges.map(({ node }) => (
          <div key={node.id} className='column is-one-third'>
            <Card slug={node.fields.slug} title={node.frontmatter.title} excerpt={node.excerpt} date={node.frontmatter.date} />
          </div>
        ))}
      </div>
      <Link to='/tags'>All tags</Link>
    </Layout>
  )
}

export default Tags
export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000,
      filter: {frontmatter: {tags: {in: [$tag]}}},
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`
