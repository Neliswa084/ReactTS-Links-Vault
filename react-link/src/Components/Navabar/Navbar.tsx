import styles from './Navbar.module.css'
import {Text} from '../Text/Text'

export const Navbar = () => {
  return (
       
    <nav>
        <div className={styles['container']}>
        <Text variant='h1'>LINKS VAULT</Text>
        <Text variant='h2'>Your browsers bookmarks</Text>
        </div>
    </nav>
   
  )
}
