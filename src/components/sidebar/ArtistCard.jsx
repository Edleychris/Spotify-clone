import React from 'react'

import styles from './artistPill.module.css'

import ArtistPill from './ArtistPill';
import kanye from './sidebarAssets/kanye.jpeg';
import drake  from './sidebarAssets/drake.jpeg';
import billie from './sidebarAssets/Billie.jpg';
import taylor from './sidebarAssets/taylor.jpeg'


const artists = [
    {
        name:' Taylor Swift',
        songs: '196',
        img : taylor
    },
    {
        name:' Kanye West',
        songs: '124',
        img: kanye 
    },
    {
        name:'Drake',
        songs: '50',
        img: drake
    },
    {
        name:'Billie Eilish',
        songs: '15',
        img: billie
    },
]

function ArtistCard() {
  return (
    <div className={styles.ShortcutCard}>
        <h1>Fav Artist</h1>
         {artists.map((item, index) => (<ArtistPill key={index} aName={item.name} songNumber={item.songs} img={item.img}/>))} 
    </div>
  )
}

export default ArtistCard