import React from 'react'
import PropTypes from 'prop-types'
import defaultImg from '../images/songs/castle.svg'

const Song = props => {
  const {
    img,
    name,
    src,
  } = props

  return (
    <div className='song'>
      <div className='song-details'>
        <img
          alt=""
          className='song-img'
          src={img || defaultImg}
          style={{
            marginRight: '12px',
            width: '64px',
            height: '64px',
            padding: img ? '0' : '8px',
            borderRadius: '8px'
          }}
        />

        <span className='song-name'>
          {name}
        </span>
      </div>


      <audio
        controls
        src={src}
      >
        Your browser does not support the <code>audio</code> element.
      </audio>
    </div>
  )
}

Song.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string,
  triggerPlay: PropTypes.func,
}

export default Song