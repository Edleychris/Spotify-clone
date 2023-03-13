import React from 'react'
import style from './mainPage.module.css'

export const cardStyles = {
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
            background: '#1db954',

		}

export const formStyles = {
			borderRadius : '5px',
		    border : '2px solid black',
			fontFamily : 'cursive',
			color : 'whitesmoke',
			marginLeft: '12px',
		    marginBottom: '12px',
            width: '300px',
            padding: '20px',
            // background: '#1db954',
        }
        
function Login({signIn}) {
     const handleSubmit = (e) => {
        e.preventDefault()
        signIn()
    }

    
    return( 
        <div >
        <div>
            <img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='logo'/>
            </div>
    <form  style={cardStyles}action="" onSubmit={handleSubmit}>
        
        <h1 style={{color: "black"}}> Spotify Connect</h1>
        <input style={formStyles} type="email" name="" id="" placeholder='Enter Your Name here'/>
        <input className={style.playBTN} style={formStyles} type="submit" value="Login" />
    </form>
    </div>
    )
  
}






export default Login