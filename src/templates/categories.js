import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const Categories = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges, totalCount } = data.allMdx
  const categoryHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } '${category}' category`

  return (
    <Layout>
      <h1>{categoryHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          )
        })}
      </ul>
      <Link to='/categories'>All categories</Link>
    </Layout>
  )
}

export default Categories
export const pageQuery = graphql`
  query($category: String) {
    allMdx(
      limit: 2000,
      filter: {frontmatter: {categories: {in: [$category]}}},
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
