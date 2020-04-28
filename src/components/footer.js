import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './style.scss'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            gatsby
            bulma
            twitter
            medium
            github
          }
        }
      }
    `}
    render={data => (
      <footer className='footer center has-background-light'>
        <div className='content has-text-centered'>
          <p className='is-size-12'>
            using{' '}
            <a href={data.site.siteMetadata.gatsby}>Gatsby</a> +{' '}
            <a href={data.site.siteMetadata.bulma}>Bulma</a>
          </p>
        </div>
      </footer>
    )}
  />
)

export default Footer
