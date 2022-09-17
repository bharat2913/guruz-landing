import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AllBlogs from './pages/AllBlogs';
import BlogsDetail from './pages/BlogsDetail';
import LandingPage from './pages/LandingPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/blogs' element={<AllBlogs />} />
        <Route path='/blog/:id' element={<BlogsDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
