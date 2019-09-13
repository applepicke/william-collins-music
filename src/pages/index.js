import React from 'react'
import classnames from 'classnames'

import Layout from '../components/layout'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading'
    }
  }

  setWrapperRef = node => {
    this.wrapperRef = node;
  }

  handleOpenArticle = article => {
    const { articleTimeout, isArticleVisible, timeout } = this.state

    this.setState({
      isArticleVisible: !isArticleVisible,
      article
    })

    setTimeout(() => {
      this.setState({
        timeout: !timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !articleTimeout
      })
    }, 350)

  }

  handleCloseArticle = () => {
    const { articleTimeout, isArticleVisible, timeout } = this.state

    this.setState({
      articleTimeout: !articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !isArticleVisible,
        article: ''
      })
    }, 350)

  }

  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle();
      }
    }
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  render() {
    const { location } = this.props

    const {
      article,
      articleTimeout,
      isArticleVisible,
      loading,
      timeout
    } = this.state

    return (
      <Layout location={location}>
        <div className={classnames({
            'body': true,
            'is-loading': !!loading,
            'is-article-visible': isArticleVisible
        })}>
          <div id="wrapper">
            <Header
              onOpenArticle={this.handleOpenArticle}
              timeout={timeout}
            />

            <Main
              isArticleVisible={isArticleVisible}
              timeout={timeout}
              articleTimeout={articleTimeout}
              article={article}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
            />
            <Footer timeout={timeout} />
          </div>

          <div id="bg"></div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
