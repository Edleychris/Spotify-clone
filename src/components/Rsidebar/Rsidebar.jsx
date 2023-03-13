import React from 'react';
import '../Spotify.css';
import img1 from '../Images/taylor.jpeg';
import img2 from '../Images/kanye.jpeg';
import img3 from '../Images/drake.jpeg';
import img4 from '../Images/Billie.jpg';
import img5 from '../Images/kana.jpg';

export default function Rsidebar() {
  return (
    <div className='container_Rside'>
      <div className='Rside_shortcut'> 
        <h3>Shortcuts</h3>
        <ul>
          <li>❄️ Chill Hits</li>
          <li>⭐Hop</li>
          <li> 🎸Accoustic</li>
          <li> ♫ India Pop</li>
          <li> 🎹Pianao Blues</li>
          <li>  🏆Jazz</li>
        </ul>
      </div>
      <div className='Rside_fav'>
        <h3>Fav Artist</h3>
        <div className='Rside_fav_sub'>
          <div className='pic_row'>
            <img src={img1} alt="Taylor" />
          <p>Taylor Swift <span>190 songs in library</span></p>
          <span className='dotted'>..</span>
          </div>
          <div className='pic_row'>
          <img src={img2} alt="Kanye" />
          <p>Kanye West <span>124 songs in library</span></p>
          <span className='dotted'>..</span>

          </div>
          <div className='pic_row'>
          <img src={img3} alt="Drake" />
          <p>Drake<span>50 songs in library</span></p>
          <span className='dotted dot'>..</span>

          </div>
          <div className='pic_row'>
          <img src={img4} alt="Billie" />
          <p>Billie Eilish <span>15 songs in library</span></p>
          <span className='dotted dot'>..</span>

          </div>
        </div>
      </div>
      <div className='Rside_tori'>
        <img src={img5} alt="kana" />
        <div className='tori-content'>
        <h4>Torisetsu </h4>
        <span>
          <p>Kana Nishino</p>
          <icon/>
        </span>
        </div>
      </div>
    </div>
  )
}
