import './App.css'
import { Add } from './Components/AddLink/Add'
import { Navbar } from './Components/Navabar/Navbar'
import { Searchbar } from './Components/Search/Searchbar'
import { LinkForm } from './Components/Form/LinkForm'
import { useState } from 'react'
import { LinkList } from './Components/LinkList/LinkList'
import {  type Link} from './Components/LinkList/LinkRow'



function App() {   

const [isFormVisible, setShowForm] = useState(false)

const [links, setLinks] = useState<Link[]>([])

// const [selectedLink, setSelectedLink] = useState<Link | null>(null)

const addLink=(newlink: Link) =>{
  setLinks([...links,newlink])
}

const deleteLink=(id:number) => {
  setLinks(links.filter(link=>link.id !==id))
}


// const viewLink = (id: number) => {
//   const link = links.find(l => l.id === id)
//   if(link) setSelectedLink(link)
// }
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
