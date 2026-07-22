import './App.css'
import { Add } from './Components/Navabar/AddLink/Add'
import { Navbar } from './Components/Navabar/Navbar'
import { Searchbar } from './Components/Search/Searchbar'
import { LinkForm } from './Components/Form/LinkForm'
import { useState } from 'react'
import { LinkList } from './Components/LinkList/LinkList'
// import { LinkListProps } from './Components/LinkList/LinkList'


function App() {

const [isFormVisible, setShowForm] = useState(false)

  return (
    <>
     <Navbar />
     <Add showForm={() => setShowForm(true)}/>
     <LinkForm isVisible={isFormVisible} close={() => setShowForm(false)}/>
     <Searchbar/>
     {/* <LinkList /> */}
    </>
  )
}

export default App
