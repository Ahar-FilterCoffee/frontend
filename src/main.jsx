import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OnboardScreen from './screens/onboard/OnboardScreen.jsx'
import LoginScreen from './screens/login/LoginScreen.jsx'
import SignUpScreen from './screens/signup/SignUpScreen.jsx'
import Post from './screens/post/Post.jsx'
import BestPosts from './screens/bestposts/BestPosts.jsx'
import PostDetails from './screens/postdetails/PostDetails.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/onboard' element={<OnboardScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/signup' element={<SignUpScreen/>} />
        <Route path='/post' element={<Post/>} />
        <Route path='/bestposts' element={<BestPosts/>} />
        <Route path='/postdetails' element={<PostDetails/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)