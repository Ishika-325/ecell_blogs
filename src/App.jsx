import React from 'react'
import BlogPage from './Blog_detail'
import BlogHero from './BlogHero'
import Header from './Header'


function App() {
  return (
    <div className='main'>
      <Header/>
      <BlogHero/>
      <BlogPage />     
    </div>
  )
}

export default App
