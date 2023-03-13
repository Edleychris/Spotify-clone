import React,  {useState} from 'react'
import TrendingCard from './TrendingCard'
import PlaylistCard from './PlaylistCard'
import MusicPlayerCard from './MusicPlayerCard'
import styles from './mainPage.module.css'
import SearchComponent from './SearchComponent'







function MainPage() {
  const [searchItem, setSearchItem] = useState('')

  


      return (
    <div className={styles.mainContainer}>
        <SearchComponent handleSearch={setSearchItem}/>
        <TrendingCard/>
        <PlaylistCard item={searchItem}/>
        <MusicPlayerCard/>
    </div>
  )
}

export default MainPage