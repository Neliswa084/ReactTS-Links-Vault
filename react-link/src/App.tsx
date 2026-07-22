import './App.css'
import { Add } from './Components/Navabar/AddLink/Add'
import { Navbar } from './Components/Navabar/Navbar'
import { Searchbar } from './Components/Search/Searchbar'
import { LinkForm } from './Components/Form/LinkForm'
import { useState } from 'react'
import { LinkList } from './Components/LinkList/LinkList'
import { LinkRow, type LinkRowProps } from './Components/LinkList/LinkRow'



function App() {   

const [isFormVisible, setShowForm] = useState(false)

const [links, setLinks] = useState<LinkRowProps[]>([])

  return (
    <>
     <Navbar />
     <Add showForm={() => setShowForm(true)}/>
     <LinkForm isVisible={isFormVisible} close={() => setShowForm(false)}/>
     <Searchbar/>

     <LinkList links={links} />
    </>
  )
} 

export default App
