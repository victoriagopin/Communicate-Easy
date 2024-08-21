import './App.css'
import Header from './components/header/Header'
import Login from './components/login/Login'
import {Routes, Route} from 'react-router-dom'
import Register from './components/register/Register'
import Home from './components/home/Home'
import Profile from './components/proifle/Profile'
import EditProfile from './components/edit-profile/EditProfile'
import CreateProfile from './components/create-profile/CreateProfile'
import { UserProvider } from './contexts/UserContext'

function App() {


  return (
   <UserProvider>
   <Header />
    
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={ <Login />}/>
    <Route path='/register' element={ <Register />}/>
    <Route path='/profile/:id' element={<Profile />} />
    <Route path='/edit' element={<EditProfile />} />
    <Route path='/create-profile' element={<CreateProfile />} />
    </Routes> 

    </UserProvider>
   
  )
}

export default App
