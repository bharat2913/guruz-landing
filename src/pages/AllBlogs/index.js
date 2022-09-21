import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import './index.css';

export default function AllBlogs() {
  const navigate = useNavigate();
  const blogs = [
    {
      id: 1,
      title: 'Why verified guruz earn more!',
      author: 'Alice',
      createdOn: 'Nov 18 2021',
      thumbnail: '/assets/blog2.png',
    },
    {
      id: 2,
      title: 'How I found my guitar coach',
      author: 'Alice',
      createdOn: 'Nov 18 2021',
      thumbnail: '/assets/blog1.png',
    },
    {
      id: 3,
      title: 'Importance of fitness guruz',
      author: 'Alice',
      createdOn: 'Nov 18 2021',
      thumbnail: '/assets/blog3.png',
    },
    {
      id: 4,
      title: 'Why verified guruz earn more!',
      author: 'Alice',
      createdOn: 'Nov 18 2021',
      thumbnail: '/assets/blog2.png',
    },
    {
      id: 5,
      title: 'How I found my guitar coach',
      author: 'Alice',
      createdOn: 'Nov 18 2021',
      thumbnail: '/assets/blog1.png',
    },
  ];
  window.scrollTo(0, 0);
  return (
    <div className='landingPage'>
      <Header />
      <div className='allBlogs'>
        <div className='allBlogsSectoin'>
          <div
            id='allBlogs'
            style={{
              fontSize: '32px',
              color: '#393939',
              fontWeight: '600',
              marginBottom: '2rem',
            }}
          >
            All Blogs
          </div>
          <div>
            {blogs.map((blog) => (
              <div
                className='blogItem'
                onClick={() => navigate(`/blog/${blog.id}`)}
              >
                <div className='img'>
                  <img src={blog.thumbnail} alt={blog.title} />
                </div>
                <div className='blogItemBody'>
                  <div className='title'>{blog.title}</div>
                  <div>
                    <div className='author'>By {blog.author}</div>
                    <div className='createdOn'>{blog.createdOn}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='blogsSidebar'>
          <div
            style={{
              fontSize: '22px',
              color: '#393939',
              fontWeight: '600',
              marginBottom: '2rem',
            }}
          >
            Related Blogs
          </div>
          {[blogs[0], blogs[1], blogs[2]].map((blog) => (
            <div
              className='blogItem'
              onClick={() => navigate(`/blog/${blog.id}`)}
            >
              <div className='img'>
                <img src={blog.thumbnail} alt={blog.title} />
              </div>
              <div className='blogItemBody'>
                <div className='title'>{blog.title}</div>
                <div>
                  <div className='author'>By {blog.author}</div>
                  <div className='createdOn'>{blog.createdOn}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
