import React from 'react'

import ArtistCard from "./ArtistCard";
import FocusArtist from "./FocusArtist";
import ShortcutCard from "./ShortcutCard";

const sidebarStyles ={
    width : '45vh',
    display : "flex",
    flexDirection: 'column',
    justifyContents: 'center',
    padding: '25px 50px',
    height: '100%'
}

function Sidebar( ) {
  return (
    <div style={sidebarStyles}>
        <ShortcutCard/>
        <ArtistCard/>
        <FocusArtist/>
    </div>
  )
}

export default Sidebar