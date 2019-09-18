import React from 'react'
import PropTypes from 'prop-types'
import Logo from './Logo'

const Header = props => {
    const { onOpenArticle } = props

    const openArticle = article => e => {
        e.preventDefault()
        onOpenArticle(article)
    }

    return (
        <header id="header" style={props.timeout ? {display: 'none'} : {}}>
            <div className="logo">
                <Logo colour="white" />
            </div>
            <div className="content">
                <div className="inner">
                    <h5>Music Production</h5>
                    <h1>William Collins</h1>
                    <p>Original <b>music </b> & <b>sound design</b> for your next video game <b>experience</b></p>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="/music" onClick={openArticle('music')}>Music</a></li>
                    <li><a href="/services" onClick={openArticle('services')}>Services</a></li>
                    <li><a href="/about" onClick={openArticle('about')}>About</a></li>
                    <li><a href="/contact" onClick={openArticle('contact')}>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
