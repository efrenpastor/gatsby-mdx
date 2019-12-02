import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'

const Tags = props => {
  const { tags } = props
  return (
    <ul>
      {
        tags && tags.map((tag, i) =>
          <li key={i}>
            <Link to={`/tags/${kebabCase(tag)}`}>
              {tag}
            </Link>
          </li>
        )
      }
    </ul>
  )
}

export default Tags
