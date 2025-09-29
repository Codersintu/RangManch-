
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LayOut from './component/layout/LayOut'
import Home from './component/routes/Home'
import Create from './component/routes/Create'
import Post from './component/routes/Post'
import Profile from './component/routes/Profile'
import Auth from './component/routes/Auth'
import Search from './component/routes/Search'

function App() {
  return (
  <Routes>
    <Route element={<LayOut/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/pins/:id' element={<Post/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/search' element={<Search/>}/>
      </Route>
      <Route path='/auth' element={<Auth/>}/>
  </Routes>
  )
}

export default App
