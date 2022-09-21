import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import './index.css';

export default function BlogsDetail() {
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
  return (
    <div className='landingPage'>
      <Header />
      <div className='allBlogs'>
        <div className='blogDetail'>
          <div
            style={{ fontSize: '16px', color: '#F5A041', fontWeight: '600' }}
          >
            Editors Pick
          </div>
          <div className='blogTitle'>How I found my guitar coach</div>
          <div className='blogImg'>
            <img src='/assets/blog2.png' alt='blog' />
          </div>
          <div style={{ fontSize: '14', color: '#878787' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum
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
