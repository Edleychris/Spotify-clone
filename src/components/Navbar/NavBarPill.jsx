import React from 'react'

const styles = {
    cursor: 'pointer',
    padding: '9px 5px',
    fontSize: '15px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
}

function NavbarPill({Img, text, addStyle}) {
  return <p className='nav-item' style={styles}><Img style={addStyle} className="navImg"/>{text}</p>     
  
}

export default NavbarPill