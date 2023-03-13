import React from 'react'
import styles from'./artistPill.module.css'



function ArtistPill({img, aName, songNumber}) {
  return (
    <div className={styles.artistContainer}>
        <figure className={styles.imgContainer}>
            <img src={img} alt="" className={styles.artistImg} />
        </figure>

        <article className={styles.artistArticle}>
            <h2 className={styles.artistName}>{aName}</h2>
            <p className={styles.aSongName}>{`${songNumber} songs in library`}</p>
        </article>
        <h3>..</h3>
    </div>
  )
}

export default ArtistPill