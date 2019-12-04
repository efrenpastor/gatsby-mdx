const path = require('path')
const { kebabCase } = require('lodash')
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
    {
      posts: allMdx(limit: 2000) {
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
      tags: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
      categories: allMdx(limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
        }
      }
    }
  `)

  try {
    const posts = query.data.posts.edges
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

    const tags = query.data.tags.group
    tags.forEach(tag => {
      createPage({
        path: `/tags/${kebabCase(tag.fieldValue)}`,
        component: path.resolve('./src/templates/tags.js'),
        context: {
          tag: tag.fieldValue
        }
      })
    })

    const categories = query.data.categories.group
    categories.forEach(category => {
      createPage({
        path: `/categories/${kebabCase(category.fieldValue)}`,
        component: path.resolve('./src/templates/categories.js'),
        context: {
          category: category.fieldValue
        }
      })
    })

  } catch (error) {
    throw new Error(error)
  }
}
