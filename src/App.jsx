import React from 'react'
import{BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import CreatePost from './pages/createPost.jsx'
import Feed from './pages/Feed.jsx'
import { Navigate } from "react-router-dom";




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/feed" />} />
        <Route path='/create-post' element={<CreatePost/>} />
        <Route path='/feed' element={<Feed/>} />
      </Routes>
    </Router>
  )
}

export default App