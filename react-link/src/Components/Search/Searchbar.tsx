import React from 'react'
import styles from './Search.module.css'
import {Text} from '../../Components/Text/Text'
import searchIcon from '../../assets/searchIcon.png'

export const Searchbar = () => {
  return (
   
        <div className={styles['search-bar']}>

        <Text variant={'span'} style={{color: 'rgb(20,20,20)', padding: 10}}>Search</Text>
        <input type='text' placeholder=' search by title, URL, description or tag' className={styles['search-input']}/>
        <img src={searchIcon} alt='search icon on search bar' className={styles['search-icon']} />
        
    </div>
  
  )
}
