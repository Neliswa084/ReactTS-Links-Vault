import './App.css'
import { Add } from './Components/Navabar/AddLink/Add'
import { Navbar } from './Components/Navabar/Navbar'
import { Searchbar } from './Components/Search/Searchbar'
import { LinkForm } from './Components/Form/LinkForm'
import { useState } from 'react'

function App() {

const [isFormVisible, setShowForm] = useState(false)

  return (
    <>
     <Navbar />
     <Add showForm={() => setShowForm(true)}/>
     <LinkForm isVisible={isFormVisible} close={() => setShowForm(false)}/>
     <Searchbar/>
    </>
  )
}

export default App
