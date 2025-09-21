import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogHero from './BlogHero';
import BlogPostCard from './BlogPostCard';
import Header from './Header';
import Footer from './Footer';
import Login from './Pages/Login';

function App() {
  return (
    <div className='main'>
      <Header />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <BlogHero />
              <BlogPostCard />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
