import React from 'react'
import Pill from './ShortcutPill'
import styles from './artistPill.module.css'

import {GiGuitar, GiTrumpet} from 'react-icons/gi'
import {AiOutlineStar} from 'react-icons/ai'
import {WiSnowflakeCold} from 'react-icons/wi'
import {BiMusic} from 'react-icons/bi'
import {CgPiano} from 'react-icons/cg'



function ShortcutCard() {
const shortcuts = [
    {
        text : 'Chill Hits',
        icon : WiSnowflakeCold, 
        style : {color: 'blue'}
    },
    {
        text : 'Hop',
        icon : AiOutlineStar,
        style : {color: 'gold'}
    },
    {
        text : 'Accoustic',
        icon : GiGuitar,
        style : {color: 'red'}
    },
    {
        text : 'Indie Pop',
        icon : BiMusic,
        style : {color: 'black'}
    },
    {
        text : 'Piano Blues',
        icon : CgPiano,
        style : {color: ''}
    },
    {
        text : 'Jazz',
        icon : GiTrumpet,
        style : {color: 'gold'}
    },
]

  return (
    <div className={styles.ShortcutCard}>
        <h1>Shortcuts</h1>
      {shortcuts.map((item, key) => (<Pill key={key} styled={item.style} Img={item.icon} text={item.text}/>))}
    </div>
  )
}

export default ShortcutCard