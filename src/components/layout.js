import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'

export default ({ children, hasHeader }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div>
      <nav className='navbar is-light'>
        <div className='container'>
          <div className='navbar-brand'>
            <Link className='navbar-item' to='/'>
              {data.site.siteMetadata.title}
            </Link>
          </div>
          <div className='navbar-menu'>
            <div className='navbar-end'>
              <Link className='navbar-item' to='/categories/'>
                Categories
              </Link>
              <Link className='navbar-item' to='/about/'>
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {
        hasHeader &&
          <header className='hero is-medium is-primary is-bold'>
            <div className='hero-body'>
              <div className='container'>
                <h1 className='title'>
                  Amazin Pandas Eating Things
                </h1>
              </div>
            </div>
          </header>
      }
      <section className='section'>
        <div className='container'>
          {children}
        </div>
      </section>
    </div>
  )
}
