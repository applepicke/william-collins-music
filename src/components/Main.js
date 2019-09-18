import React from 'react'
import PropTypes from 'prop-types'
import Section from './Section'
import SongManager from './SongManager'
import ContactForm from './ContactForm'
import studio from '../images/studio.jpg'

class Main extends React.Component {
  render() {
    const {
      article,
      articleTimeout,
      onCloseArticle,
      onOpenArticle,
      setWrapperRef,
      timeout,
    } = this.props

    return (
      <div
        ref={setWrapperRef}
        id="main"
        style={{
          display: timeout ? 'flex' : 'none'
        }}
      >
        <Section
          article={article}
          articleTimeout={articleTimeout}
          onCloseArticle={onCloseArticle}
          title='Music'
        >
          <SongManager />
        </Section>

        <Section
          article={article}
          articleTimeout={articleTimeout}
          onCloseArticle={onCloseArticle}
          title='Services'
        >
          <h4>Adaptive Music & Sound</h4>
          <p>
            Your game deserves more than just a few catchy tunes and some gunshot sounds. The best games are able to use music and audio to lend service to the gameplay in ways that other media simply cannot. With my software engineering background, my job doesn't end with a zipped folder of audio files. I'm not afraid to dive headfirst into your codebase and do some truly creative things.
          </p>

          <h4>Custom Music & Sound</h4>
          <p>
            Whether you're creating a compelling emotional story about Two Brothers, or a power-fueled shoot-their-faces-off Doom clone, you already know that the music sets the stage. Only the music can reach directly into your brain and stimulate your emotion sack. Whatever your design goals, I would love to hear about your project. Hit me up using the
            &nbsp;<a href="/contact" onClick={e => { e.preventDefault(); onCloseArticle(() => onOpenArticle('contact'))}}><b>Contact</b></a>&nbsp;
            form and we can go from there.
          </p>

          <h4>Catalogue Music</h4>
          <p>
            The pieces in the
            &nbsp;<a href="/music" onClick={e => { e.preventDefault(); onCloseArticle(() => onOpenArticle('music'))}}><b>Music</b></a>&nbsp;
            section are meant to highlight the versatility of my work. In my opinion, video games are special creations that can only deliver a compelling experience with audio custom tailored to deliver on the creator's vision. However, if you're on a tight budget or just doing some prototyping, I offer licensing for any music in my larger catalogue.
          </p>
        </Section>

        <Section
          article={article}
          articleTimeout={articleTimeout}
          onCloseArticle={onCloseArticle}
          title='About'
        >
          <p>
            I'm William Collins, a software engineer, composer and sound designer from the frigid land of Ottawa, Canada.
          </p>

          <img
            alt="William Collins in his music studio"
            src={studio}
            style={{
              width: '100%',
              margin: '-16px 0 12px'
            }}
          />

          <p>
            Whether you're working on the next Dark Souls, Celeste or SimAnt, I want to help. I have a deep-rooted <b>passion</b> for creating an audio <b>experience</b> that services the deeper themes and tone of your game.
          </p>

          <p>
            Most importantly, I believe in the old-fashioned values of honesty, integrity & professionalism, and expect the same from those I work with. Fill out the
            &nbsp;<a href="/contact" onClick={e => { e.preventDefault(); onCloseArticle(() => onOpenArticle('contact'))}}><b>Contact</b></a>&nbsp;
            form and tell me what you're working on, and we can see if we would be a good fit :)
          </p>
        </Section>

        <Section
          article={article}
          articleTimeout={articleTimeout}
          onCloseArticle={onCloseArticle}
          title='Contact'
        >
          <ContactForm />
        </Section>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main