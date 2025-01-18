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
import SuccessfullyCreated from './components/successfully-created/SuccessfullyCreated'
import SearchUser from './components/search-user/SearchUser'
import NotFoundUser from './components/not-found-user/NotFoundUser'
import Chat from './components/chat/Chat'
import MyChats from './components/my-chats/MyChats'
import ProfileToChat from './components/profile-to-chat/ProfileToChat'

function App() {


  return (
   <UserProvider>
   <Header />
    
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={ <Login />}/>
    <Route path='/register' element={ <Register />}/>
    <Route path='/my-chats' element={ <MyChats />}></Route>
    <Route path='/profile/:ownerId' element={<Profile />} />
    <Route path='/profile-to-chat/:ownerId' element={<ProfileToChat />}/>
    <Route path='/edit/:id' element={<EditProfile />} />
    <Route path='/success' element={<SuccessfullyCreated />} />
    <Route path='/create-profile' element={<CreateProfile />} />
    <Route path='/communicate-now' element={<SearchUser />} />
    <Route path='/not-found' element={<NotFoundUser />} />
    <Route path='/chat/:id' element={<Chat />} />
    </Routes> 

    </UserProvider>
   
  )
}

export default App
