import React from 'react'
import  styles from './Modal.module.css'
import closeIcon from '../../assets/close.png'

type ModalProps={
    children: React.ReactNode,
     close: () => void
}
export const Modal: React.FC<ModalProps> = ({children, close}) => {
  const stopProgation = (e: React.MouseEvent<HTMLDivElement>) =>{
    e.stopPropagation()
  }
    return (
    <div className={styles['modal']} onClick={close}>
         <div className={styles['modal-child']} onClick={stopProgation}>
          <img className={styles['close-icon']} src={closeIcon} alt="close icon on the modal" onClick={close}/>
          {children}
         </div>
    </div>
  )
}
