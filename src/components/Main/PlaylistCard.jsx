import React,  {useState, useEffect} from 'react'
import styles from './mainPage.module.css'
import axios from 'axios';


const clientID = process.env.REACT_APP_SPOTIFY_ID
const secret = process.env.REACT_APP_SPOTIFY_SECRET
const redirectURI = process.env.REACT_APP_REDIRECT_URI


function PlaylistCard({item}) {
    const [token, setToken] = useState('');  
    const [tracks, setTracks] = useState([]);
    const [defaultSongDetails, setDefaultSongDetails]  = useState([
            {
                id: 1,
                title: 'priority',
                artist: 'mons def',
                time: '1:25',
                album: 'The Ecstatic'
            },
            {
                id: 2,
                title: 'Last Last',
                artist: 'BurnaBoy',
                time: '1:25',
                album: 'Twice as Tall'
            },
            {
                id: 3,
                title: 'priority',
                artist: 'mons def',
                time: '1:25',
                album: 'The Ecstatic'
            },
            {
                id: 4,
                title: 'Last Last',
                artist: 'BurnaBoy',
                time: '1:25',
                album: 'Twice as Tall'
            },
            {
                id: 5,
                title: 'priority',
                artist: 'mons def',
                time: '1:25',
                album: 'The Ecstatic'
            },

    ])

    useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(clientID + ':' + secret)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {      
      setToken(tokenResponse.data.access_token);

      axios(`https://api.spotify.com/v1/search?q=artist:${item == "" ? 'davido' : item }&type=track&limit=8`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token},
      })
      .then (Response => {        
        setTracks(Response.data.tracks.items)
      });
      
    });

  }, [clientID, secret, item]); 

  return (
    <div className={styles.playlistContainer}>
        <section className={styles.playlistHeader}>
            <h1>My Playlist</h1>
            <p>Show All</p>
        </section>
        <div className={styles.playlistHeader}>
            <span>{'#'}</span>
            <span>TITLE</span>
            <span>ARTIST</span>
            <span>TIME</span>
            <span>ALBUM</span>
        </div>
        {tracks.map((item, index) =>
        (<a href={item.preview_url} target="_blank">
            <div key={index} className={styles.playlistPill}>
            <span>{index+1}</span>
            <span>{item.name}</span>
            <span>{item.artists[0].name}</span>
            <span>{item.duration_ms}</span>
            <span>{item.album.name}</span>
        </div>
        </a>
        ))}
    </div>
  )
}

export default PlaylistCard