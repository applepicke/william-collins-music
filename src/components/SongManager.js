import React from 'react'
import Song from './Song'

// Song images
import dinonautImg from '../images/songs/dinonaut.jpg'
import retributionImg from '../images/songs/retribution.jpg'
import silentLightImg from '../images/songs/silent-light.jpg'
import iveGotAnIdeaImg from '../images/songs/ive-got-an-idea.jpg'
import gascreepsFortuneImg from '../images/songs/gascreeps-fortune.jpg'

// Songs
import dinonaut from  '../songs/dinonaut.mp3'
import retribution from '../songs/retribution.mp3'
import silentLight from '../songs/silent-light.mp3'
import asTheyFellFromTheSky from '../songs/as-they-fell-from-the-sky.mp3'
import iveGotAnIdea from '../songs/ive-got-an-idea.mp3'
import buildUpTheBase from '../songs/build-up-the-base-overworld.mp3'
import doubt from '../songs/doubt.mp3'
import gascreepsFortune from '../songs/gascreeps-fortune.mp3'
import lostMemories from '../songs/Lost Memories.mp3'

const SONGS = [{
  name: 'Lost Memories',
  src: lostMemories
}, {
  name: 'Dinonaut: Defender of Celestial Dwarfs',
  img: dinonautImg,
  src: dinonaut
}, {
  name: 'Retribution',
  img: retributionImg,
  src: retribution
}, {
  name: 'Silent Light',
  img: silentLightImg,
  src: silentLight
}, {
  name: 'Doubt',
  src: doubt
}, {
  name: 'Build up the Base: Overworld',
  src: buildUpTheBase
}, {
  name: 'Gascreep\'s Fortune',
  img: gascreepsFortuneImg,
  src: gascreepsFortune
}, {
  name: 'As They Fell From The Sky',
  src: asTheyFellFromTheSky
}, {
  name: 'I\'ve got an idea',
  img: iveGotAnIdeaImg,
  src: iveGotAnIdea
}]

const SongManager = () => {
  return (
    <div className='song-manager'>
      {SONGS.map(song => {
        return (
          <Song
            key={song.src}
            name={song.name}
            img={song.img}
            src={song.src}
          />
        )
      })}
    </div>
  )
}

export default SongManager