const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  if (getConfig().mode === 'production') {
    actions.setWebpackConfig({
      devtool: false
    })
  }
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode, basePath: 'src/content' })
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const query = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          previous {
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
  `)

  try {
    const posts = query.data.allMdx.edges
    posts.forEach(({ node, previous, next }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {
          id: node.id,
          slug: node.fields.slug,
          previous: previous,
          next: next
        }
      })

      createPage({
        path: `/amp/${node.fields.slug}`,
        component: path.resolve('./src/templates/blog-post.amp.js'),
        context: {
          id: node.id,
          slug: node.fields.slug,
          previous: previous,
          next: next
        }
      })
    })
  } catch (error) {
    throw new Error(error)
  }
}
