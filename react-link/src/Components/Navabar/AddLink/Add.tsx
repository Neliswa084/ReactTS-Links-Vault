import React from 'react'
import {Text} from '../../Text/Text'
import styles from './Add.module.css'

export const Add = () => {
  return (

    <div className={styles['add-container']}>
        <Text variant='h2'> My Links</Text>
        <button >Add Link</button>
    </div>
  )
}
