import './App.css'
import { Add } from './Components/AddLink/Add'
import { Navbar } from './Components/Navabar/Navbar'
import { Searchbar } from './Components/Search/Searchbar'
import { LinkForm } from './Components/Form/LinkForm'
import { useState } from 'react'
import { LinkList } from './Components/LinkList/LinkList'
import {  type LinkItem} from './Components/LinkList/LinkRow'



function App() {   

const [isFormVisible, setShowForm] = useState(false)

const [links, setLinks] = useState<LinkItem[]>(()=>{
  try {
    const savedLinks = localStorage.getItem("links") 
    return savedLinks? JSON.parse(savedLinks) : [] 
  } catch (error) {
    return []
  }
})

// const [selectedLink, setSelectedLink] = useState<LinkItem | null>(null)
  const [editedLink , setEditLink] = useState<LinkItem | null>(null)  ;

const addLink=(newlink: LinkItem) =>{
  setLinks((prevLinks) => {
    const currentArray = Array.isArray(prevLinks) ? prevLinks : []
   const updatedArray= [...currentArray,newlink]
   localStorage.setItem("links", JSON.stringify(updatedArray))
   return updatedArray
  })
}

const deleteLink=(id:number) => {
  setLinks(links.filter(link=>link.id !==id))
  const updatedArray = (links.filter(link=>link.id !==id))
  localStorage.setItem("links", JSON.stringify(updatedArray))
  return updatedArray
} 

// const edited = (id: number) => {
//   const link = links.find (l => l.id == id)
//   if(link) setEditLink(link)
// }

// const up
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

     <LinkList links={links} onDelete={deleteLink}  />
    </>
  )
} 

export default App
