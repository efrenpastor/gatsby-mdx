import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'

const Tags = props => {
  const { tags } = props
  return (
    <nav className='tags are-medium'>
      {
        tags && tags.map((tag, i) =>
          <Link key={i} className='tag is-link is-light' to={`/tags/${kebabCase(tag)}`}>
            {tag}
          </Link>
        )
      }
    </nav>
  )
}

export default Tags
