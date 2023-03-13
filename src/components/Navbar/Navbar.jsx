import React from 'react'

import NavbarPill from './NavbarPill'
import UserPill from './UserPill'
import styles from './navbar.module.css'


import {AiOutlineStar} from 'react-icons/ai'
import {MdHomeFilled} from 'react-icons/md'
import {RiFunctionLine, RiSpotifyLine} from 'react-icons/ri'
import  {CgTrending} from 'react-icons/cg'
import {BsSlashCircle, BsCalendar4Event, BsHeart, BsPeople} from 'react-icons/bs'
import {RxCalendar} from'react-icons/rx'





const sectionHeadStyles = {
  fontSize : '11px',
  marginBottom : '8px',
  color : '#7d7b7a',
}

const section1 = [
       {
        name : 'Home',
        icon : MdHomeFilled
      },
      {
        name : 'Trends',
        icon : CgTrending
      },
      {
        name : 'Feeds',
        icon : BsSlashCircle
      },
      
]
const section2 = [
  {
        name : 'New and Notable',
        icon : RiFunctionLine
      },
      {
        name : 'Release Calendar',
        icon : RxCalendar
      },
      {
        name : 'Events',
        icon : BsCalendar4Event
      },
] 
const section3 =  [
  {
        name : 'Favourite Songs',
        icon : BsHeart
      },
      {
        name : 'Artist',
        icon : BsPeople
      },
      {
        name : 'Albums',
        icon : AiOutlineStar
      },

]


function Navbar({signout}) {
  return (
    <div className={styles.navbarStyles}>
      <h1 className={styles.spotify}><RiSpotifyLine className={styles.spotifyE}/> Spotify Music</h1>
      <section className={styles.sectionStyles}>
        {section1.map((item, index) => (<NavbarPill key={index}  Img={item.icon} text={item.name}/>))}
      </section>
      <section className={styles.sectionStyles}>
        <p style={sectionHeadStyles}>Discover</p>
        {section2.map((item, index) => (<NavbarPill key={index}  Img={item.icon} text={item.name}/>))}
      </section>
      <section className={styles.sectionStyles}>
        <p style={sectionHeadStyles}>Your Collection</p>
        {section3.map((item, index) => (<NavbarPill key={index}  Img={item.icon} text={item.name}/>))}
      </section>
      <UserPill signOut={signout}/>
    </div>
  )
}

export default Navbar