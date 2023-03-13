import React from 'react'

import {BsHeart, BsArrowsAngleExpand, BsRepeat, BsPauseCircleFill, BsShuffle} from 'react-icons/bs'
import {SlMusicToneAlt} from 'react-icons/sl'
import {GrChapterPrevious, GrChapterNext} from 'react-icons/gr'
import {CiVolumeHigh} from 'react-icons/ci'
import {AiOutlineLine} from 'react-icons/ai'
import {MdOutlineAdjust} from 'react-icons/md'

import styles from './mainPage.module.css'



function MusicPlayerCard() {
  return (
    <div className={styles.musicplayerContainer}>
        <section className={styles.musicplayerFirst}>
            <div>
                <BsHeart className={styles.playIcon}/>
                <SlMusicToneAlt className={styles.playIcon}/>
                <BsArrowsAngleExpand className={styles.playIcon}/>
            </div>
        <div className={styles.musicplayerMiddle}>
                <span><BsRepeat className={styles.playIcon}/></span>
                <span><GrChapterPrevious className={styles.playIcon}/></span>
                <span><BsPauseCircleFill className={styles.playIcon}/></span>
                <span><GrChapterNext className={styles.playIcon}/></span>
                <span><BsShuffle className={styles.playIcon}/></span>
            </div>
            <div>
                <CiVolumeHigh className={styles.playIcon}/>
                <AiOutlineLine/>
                <MdOutlineAdjust className={styles.playIcon}/>
                <CiVolumeHigh className={styles.playIcon}/>
            </div>
        </section>
        <span className={styles.musicplayerSecond}>{"0:43"}<AiOutlineLine/><MdOutlineAdjust/>{"2:59"}</span>
    </div>
  )
}

export default MusicPlayerCard