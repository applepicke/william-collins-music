import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


const Section = props => {
  const {
    article,
    articleTimeout,
    children,
    onCloseArticle,
    title
  } = props

  return (
    <article
      id={title.toLowerCase()}
      className={classnames({
        active: article === title.toLowerCase(),
        timeout: articleTimeout
      })}
      style={{
        display:'none'
      }}
    >
      <h2 className="major">{title}</h2>
      {children}

      <div
        className="close"
        onClick={onCloseArticle}
      />
    </article>
  )
}

Section.propTypes = {
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  children: PropTypes.node,
  onCloseArticle: PropTypes.func,
  title: PropTypes.string,
}

export default Section