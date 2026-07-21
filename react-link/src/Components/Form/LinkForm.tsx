import React from 'react'
import { Modal } from '../Modal/Modal'
import { TextInput } from '../Inputs/TextInput'
import { Button } from '../Inputs/Button'
import styles from './Form.module.css'


type LinkFormProps ={
    close: () => void,
  isVisible: boolean
}

export const LinkForm: React.FC<LinkFormProps> = ({close , isVisible}) => {
   if(!isVisible) return null
    return (
     <Modal close={close}>
        <div className={styles['container']}>
        <TextInput label="Title" onChange={()=> {}}/>
        <TextInput label="Link(URL)" onChange={()=> {}}/>
        <TextInput label="Description" onChange={()=> {}}/>
        <TextInput label="Tags" onChange={()=> {}}/>
         <Button value={'Add Link'} />
        </div>
     </Modal>
  )
}
