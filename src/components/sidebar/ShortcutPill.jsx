import React from 'react'

 const styles = {
    borderRadius: '12px',
    padding: '6px 8px',
    backgroundColor: 'white',
    border: '2px solid White',
    color: 'black',
    cursor: 'pointer',
    marginRight: '7px',
    marginBottom: '6px',
    fontSize: '10.5px',
    alignItems: 'center',
}


function Pill({Img, text, styled}) {
  return <button style={styles}><Img style={styled}/>{text}</button>
}

export default Pill