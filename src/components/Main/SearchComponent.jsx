import React from 'react'
import { BsSearch } from 'react-icons/bs'

import styles from './mainPage.module.css'




function SearchComponent({handleSearch}) {
  return (
    <div className={styles.searchContainer}>
      <p className={styles.arrow}>&#8592; &#8594;</p>
      <span className={styles.search} >
        <BsSearch/><input 
        type="text" 
        placeholder='Search for artists' 
        onChange={(e) => handleSearch(e.target.value)}
        />
     </span>
    </div>
  )
}

export default SearchComponent