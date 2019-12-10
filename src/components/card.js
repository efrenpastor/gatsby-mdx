import React from 'react'
import { Link } from 'gatsby'

const Card = props => {
  const {
    slug,
    title,
    excerpt,
    date
  } = props
  return (
    <Link className='box card' to={slug}>
      <div className='card-content'>
        {
          title &&
            <p className='title is-4'>
              {title}
            </p>
        }
        {
          excerpt &&
            <p className='subtitle is-5'>{excerpt}</p>
        }
      </div>
      {
        date &&
          <footer className='card-footer'>
            <p className='card-footer-item'>
              {date}
            </p>
          </footer>
      }
    </Link>
  )
}

export default Card
