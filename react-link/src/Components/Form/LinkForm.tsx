import React, { useState } from 'react'
import { Modal } from '../Modal/Modal'
import { TextInput } from '../Inputs/TextInput'
import { Button } from '../Inputs/Button'
import styles from './Form.module.css'
import type { LinkItem} from '../LinkList/LinkRow'


type LinkFormProps ={
    close: () => void,
  isVisible: boolean,
  onSave:(link:LinkItem) => void

}

export const LinkForm: React.FC<LinkFormProps> = ({close , isVisible , onSave}) => {

   
const [title, setTitle] = useState('')
const [url , setUrl] = useState('')
const [description , setDescription] = useState('')
const [tag , setTags] = useState('')

const handleSubmit= () => {
   onSave({id:Date.now(),
      title,
      url,
      description,
      tags:tag 
   }
  
   )
   setTitle('')
 setUrl('')
 setDescription('')
 setTags('')

 close()
}

 


   if(!isVisible) return null
    return (
     <Modal close={close}>
        <div className={styles['container']}>
        <TextInput label="Title" value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <TextInput label="Link(URL)" value={url} onChange={(e)=> setUrl(e.target.value)}/>
        <TextInput label="Description" value={description} onChange={(e)=> setDescription(e.target.value)}/>
        <TextInput label="Tags" value={tag} onChange={(e)=> setTags(e.target.value)}/>
         <Button value={'Add Link'} onClick={handleSubmit}/>
        </div>
     </Modal>
  )
}   
