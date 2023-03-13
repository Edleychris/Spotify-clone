import React from 'react'
import tori from './sidebarAssets/torisestu.jpg'
import {MdAdd} from 'react-icons/md'


const cardStyles = {
    backgroundColor: 'White',
    borderRadius: '10px',
    height : '180px',
    width : '150px',
    padding : '15px 15px',
    alignItems: 'center',
    marginBottom: '20px',
    marginTop: '13px'
}

const imgStyles = {
    borderRadius: '10px',
    height : '120px',
    width : '150px'
}

const nameStyles = {
    fontWeight: '550',
    fontSize: '14px',
    marginTop: '10px'
}

const othernameStyles = {
    fontSize: '12px',
    color: '#7d7b7a'
}

const addStyles = {
    border : '2px solid #242222',
    display : 'inline',
    borderRadius : '4px',
    marginTop : '29px',
    marginLeft: '4px',
    fontSize : '13px'

}

const articleStyles = {
    display: 'flex',
    flexDirection : 'row'
}

function FocusArtist() {
  return (
    <div style={cardStyles}>
        <img src={tori} alt="" style={imgStyles} />
        <article style={articleStyles}>
            <section>
            <p style={nameStyles}>Torisetsu ティスツ</p>
            <p style={othernameStyles}>Kana Nishino</p>
            </section>
            <MdAdd style={addStyles}/>
        </article>
        
    </div>
  )
}

export default FocusArtist