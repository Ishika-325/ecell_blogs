import React from 'react'
import BlogPage from './Blog_detail'
import BlogHero from './BlogHero'
import BlogPostCard from './BlogPostCard'
import Header from './Header'
import AddBlogForm from './BlogForm'


function App() {
  return (
    <div className='main'>
      <Header/>
      <BlogHero/>
      <BlogPostCard />    
    </div>
  )
}

export default App
