
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './comoponents/Navbar'
import BlogPage from './comoponents/BlogPage'
import Home from './comoponents/Home'


function App() {
  

  return (
    <>
     <div>
      <Navbar>
        
      </Navbar>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/add-blog" element={<BlogPage/>}/>
      </Routes>
     </div>
    
    </>
  )
}

export default App
