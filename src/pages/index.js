import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Card from '../components/card'

export default ({ data }) => {
  return (
    <Layout hasHeader>
      <h4 className='subtitle'>{data.allMdx.totalCount} Posts</h4>
      <div className='container'>
        <div className='columns is-multiline'>
          {data.allMdx.edges.map(({ node }) => (
            <div key={node.id} className='column is-one-third'>
              <Card slug={node.fields.slug} title={node.frontmatter.title} excerpt={node.excerpt} date={node.frontmatter.date} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
