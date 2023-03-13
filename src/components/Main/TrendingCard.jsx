import React from 'react'
import { BsFire } from 'react-icons/bs'

import styles from './mainPage.module.css'

function TrendingCard() {
  return (
    <div>
        <p>What's hot <BsFire className={styles.fire}/></p>
        <section className={styles.mainTitleContainer}>
            <h1>Trending</h1>
            <p>More{">"}</p>
        </section>
        <article className={styles.trendyImageContainer}>
            <p id='focusdetails'>Artist</p>
            <h1 id='focusdetails'>On Top</h1>
            <h1 id='focusdetails'>Of the World</h1>
            <section className={styles.mainBTNContainer}>
                <div>
                    <button className={styles.playBTN}>Play</button>
                    <button  className={styles.followBTN}>Follow</button>
                </div>
            </section>
        </article>      
    </div>
  )
}

export default TrendingCard