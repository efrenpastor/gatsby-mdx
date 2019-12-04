import React from 'react'
import kebabCase from 'lodash/kebabCase'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
const CategoriesPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Layout>
    <h1>Categories</h1>
    <ul>
      {group.map(category => (
        <li key={category.fieldValue}>
          <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
            {category.fieldValue} ({category.totalCount})
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default CategoriesPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`
