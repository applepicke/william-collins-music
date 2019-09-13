import React from 'react'
import PropTypes from 'prop-types'

const currentYear = new Date().getFullYear()

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
    <p className="copyright">&copy; William Collins {currentYear}</p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool
}

export default Footer
