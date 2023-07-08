import React from 'react'
import {RiSpotifyLine} from 'react-icons/ri'
import styles from '../Navbar/navbar.module.css'
import style from './mainPage.module.css'

export const cardStyles = {
			fontFamily : 'cursive', 
			background : '#ddeded', 
			color : 'whitesmoke', 
			fontSize : '23px',
			display : 'flex',
			flexDirection : 'column',
			justifyContent : 'center',
            alignItem: 'center',
            width: '800px',
			height : '350px',
			marginTop: '70px',
			marginLeft : '250px',
			padding : '20px 50px',
            maxWidth:  '1840px',
		}

export const formStyles = {
			borderRadius : '5px',
		    border : '2px solid black',
			background: 'rgb(23, 23, 23)',
			fontFamily : 'cursive',
			color : 'whitesmoke',
			marginLeft: '12px',
		    marginBottom: '12px',
            width: '300px',
        }
        
function Login({signIn}) {
     const handleSubmit = (e) => {
        e.preventDefault()
        signIn()
    }

    
    return( 
    <form  style={cardStyles}action="" onSubmit={handleSubmit}>
        <h1 style={{color:"black", alignItems: 'center', marginBottom: '12px'}}><RiSpotifyLine className={styles.spotifyE}/> Spotify Music</h1>
        <input style={formStyles} type="email" name="" id="" placeholder='Enter Your Name here'/>
        <input className={style.playBTN} style={formStyles} type="submit" value="Login" />
    </form>
    )
  
}






export default Login