import React from 'react'
import styles from './Input.module.css'

type TextInputProps ={
    id?: string,
    value?: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    style?: React.CSSProperties,
    label: string,
    error?: string,
    name?: string
}
export const TextInput: React.FC<TextInputProps> = ({id, value, onChange, style, label, error, name}) => {
  return (
     <div className={styles['input-container']}>
       <label className={styles['input-label']}>{label}</label>
       <input name={name} type="text" id={id} style={style} value={value} onChange={onChange} className={styles.input}/>
       {error && <span className={styles['input-error']}>{error}</span>}
    </div>
  )
}
