import './App.css'
import { Add } from './Components/Navabar/AddLink/Add'
import { Navbar } from './Components/Navabar/Navbar'
import { Searchbar } from './Components/Search/Searchbar'
import { LinkForm } from './Components/Form/LinkForm'
import { useState } from 'react'
import { LinkList } from './Components/LinkList/LinkList'
import { LinkRow, type Link, type LinkRowProps } from './Components/LinkList/LinkRow'



function App() {   

const [isFormVisible, setShowForm] = useState(false)

const [links, setLinks] = useState<Link[]>([])

const addLink=(newlink: Link) =>{
  setLinks([...links,newlink])
}

const deleteLink=(id:number) => {
  setLinks(links.filter(link=>link.id !==id))
}
  return (
    <>
     <Navbar />
     <Add showForm={() => setShowForm(true)}/>
     <LinkForm 
     isVisible={isFormVisible} 
     close={() => setShowForm(false)}
     onSave={addLink}/>
     <Searchbar/>

     <LinkList links={links} onDelete={deleteLink} />
    </>
  )
} 

export default App
