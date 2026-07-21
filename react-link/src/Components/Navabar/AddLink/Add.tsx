import React from 'react'
import {Text} from '../../Text/Text'
import styles from './Add.module.css'
import plusIcon from '../../../assets/plus.png'

type  AddProps={

    showForm: () => void
    
}
export const Add:React.FC<AddProps> = ({showForm}) => {
    
  return (

    <div className={styles['add-container']}>
        <Text variant='h2'> My Links</Text>
        <button className={styles['add-button']} onClick={showForm} >
            <img src={plusIcon} alt="plus sign add icon" className={styles['img']}></img>Add Link</button>     
    </div>
  )
}
