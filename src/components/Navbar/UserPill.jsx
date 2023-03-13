import React from 'react'
import styles from '../sidebar/artistPill.module.css'
import style from '../main/mainPage.module.css'
import userImg from './navbarAssets/taylor.jpg'


const btnStyles = {
			borderRadius : '15px',
		  border : '2px solid black',
			background: 'rgb(23, 23, 23)',
			fontFamily : 'cursive',
			color : 'whitesmoke',
			marginLeft: '12px',
		  marginBottom: '12px',
      display: 'block',
      padding: '4px 8px'
        }

function UserPill({signOut, username}) {
  return (
    <section>
      <div className={styles.artistContainer} id='userPill'>
        <figure className={styles.imgContainer}>
            <img src={userImg} alt="" className={styles.artistImg} />
        </figure>

        <article className={styles.artistArticle} >
            <h2 className={styles.artistName}>{username="Ceptari Tyas"}</h2>
        </article>
        <h3> {'>'} </h3>
    </div>
    <button className={style.playBTN} style={btnStyles} onClick={signOut} >Sign Out</button>
    </section>
  )
}

export default UserPill