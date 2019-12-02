import React from 'react'
import { Link } from 'gatsby'

const PrevNext = props => {
  const { previous, next } = props
  return (
    <ul>
      {
        previous &&
          <li>
            <Link to={previous.fields.slug}>
              {`Previous  ${previous.frontmatter.title}`}
            </Link>
          </li>
      }
      {
        next &&
          <li>
            <Link to={next.fields.slug}>
              {`Next  ${next.frontmatter.title}`}
            </Link>
          </li>
      }
    </ul>
  )
}

export default PrevNext
