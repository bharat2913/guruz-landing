import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

export default function Blogs() {
  const navigate = useNavigate();
  return (
    <div id='Blogs' className='blogs'>
      <div className='blogsText'>
        <div style={{ fontSize: '14px', color: '#F5A041', fontWeight: '600' }}>
          Editors Pick
        </div>
        <div style={{ fontSize: '32px', color: '#393939', fontWeight: '600' }}>
          Our Blogs
        </div>
        <div style={{ fontSize: '13', color: '#c3c3c3' }}>
          Sed ut perspicia unde omnis natus error sit volupt accusantium
          doloremque laudantium totam rem aperiam eaque quae
        </div>

        <div className='blogAction'>
          <button onClick={() => navigate(`/blogs`)}>View all</button>
        </div>
      </div>
      <div className='blogsLinks'>
        <div onClick={() => navigate(`/blog/${'1'}`)} className='blog'>
          <img src='/assets/blog1.png' alt='blog1' />
          <div className='blogData'>
            <div>How I found my guitar coach</div>
            <div style={{ fontSize: '14px' }}>By Alice . Nov 18 2021</div>
          </div>
        </div>
        <div>
          <div
            onClick={() => navigate(`/blog/2`)}
            className='blog'
            style={{ marginBottom: '1rem' }}
          >
            <img src='/assets/blog2.png' alt='blog2' />
            <div className='blogData'>
              <div>Why verified guruz earn more!</div>
              <div style={{ fontSize: '14px' }}>By Alice . Nov 18 2021</div>
            </div>
          </div>
          <div onClick={() => navigate(`/blog/3`)} className='blog'>
            <img src='/assets/blog3.png' alt='blog3' />
            <div className='blogData'>
              <div>Importance of fitness guruz</div>
              <div style={{ fontSize: '14px' }}>By Alice . Nov 18 2021</div>
            </div>
          </div>
        </div>
        <div className='dots'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            // xmlns:xlink='http://www.w3.org/1999/xlink'
            width='270'
            height='270'
            viewBox='0 0 270 270'
          >
            <defs>
              <clipPath id='clip-path'>
                <rect width='270' height='270' fill='none' />
              </clipPath>
            </defs>
            <g
              id='Repeat_Grid_6'
              data-name='Repeat Grid 6'
              opacity='0.101'
              clip-path='url(#clip-path)'
            >
              <g transform='translate(-577 -356)'>
                <circle
                  id='Ellipse_3'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-535 -356)'>
                <circle
                  id='Ellipse_3-2'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-493 -356)'>
                <circle
                  id='Ellipse_3-3'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-451 -356)'>
                <circle
                  id='Ellipse_3-4'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-409 -356)'>
                <circle
                  id='Ellipse_3-5'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-367 -356)'>
                <circle
                  id='Ellipse_3-6'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-325 -356)'>
                <circle
                  id='Ellipse_3-7'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-577 -324)'>
                <circle
                  id='Ellipse_3-8'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-535 -324)'>
                <circle
                  id='Ellipse_3-9'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-493 -324)'>
                <circle
                  id='Ellipse_3-10'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-451 -324)'>
                <circle
                  id='Ellipse_3-11'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-409 -324)'>
                <circle
                  id='Ellipse_3-12'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-367 -324)'>
                <circle
                  id='Ellipse_3-13'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-325 -324)'>
                <circle
                  id='Ellipse_3-14'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-577 -292)'>
                <circle
                  id='Ellipse_3-15'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-535 -292)'>
                <circle
                  id='Ellipse_3-16'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-493 -292)'>
                <circle
                  id='Ellipse_3-17'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-451 -292)'>
                <circle
                  id='Ellipse_3-18'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-409 -292)'>
                <circle
                  id='Ellipse_3-19'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-367 -292)'>
                <circle
                  id='Ellipse_3-20'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-325 -292)'>
                <circle
                  id='Ellipse_3-21'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-577 -260)'>
                <circle
                  id='Ellipse_3-22'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-535 -260)'>
                <circle
                  id='Ellipse_3-23'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-493 -260)'>
                <circle
                  id='Ellipse_3-24'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-451 -260)'>
                <circle
                  id='Ellipse_3-25'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-409 -260)'>
                <circle
                  id='Ellipse_3-26'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-367 -260)'>
                <circle
                  id='Ellipse_3-27'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-325 -260)'>
                <circle
                  id='Ellipse_3-28'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-577 -228)'>
                <circle
                  id='Ellipse_3-29'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-535 -228)'>
                <circle
                  id='Ellipse_3-30'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-493 -228)'>
                <circle
                  id='Ellipse_3-31'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-451 -228)'>
                <circle
                  id='Ellipse_3-32'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-409 -228)'>
                <circle
                  id='Ellipse_3-33'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-367 -228)'>
                <circle
                  id='Ellipse_3-34'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-325 -228)'>
                <circle
                  id='Ellipse_3-35'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-577 -196)'>
                <circle
                  id='Ellipse_3-36'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-535 -196)'>
                <circle
                  id='Ellipse_3-37'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-493 -196)'>
                <circle
                  id='Ellipse_3-38'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-451 -196)'>
                <circle
                  id='Ellipse_3-39'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-409 -196)'>
                <circle
                  id='Ellipse_3-40'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-367 -196)'>
                <circle
                  id='Ellipse_3-41'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-325 -196)'>
                <circle
                  id='Ellipse_3-42'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-577 -164)'>
                <circle
                  id='Ellipse_3-43'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-535 -164)'>
                <circle
                  id='Ellipse_3-44'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-493 -164)'>
                <circle
                  id='Ellipse_3-45'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-451 -164)'>
                <circle
                  id='Ellipse_3-46'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-409 -164)'>
                <circle
                  id='Ellipse_3-47'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-367 -164)'>
                <circle
                  id='Ellipse_3-48'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-325 -164)'>
                <circle
                  id='Ellipse_3-49'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-577 -132)'>
                <circle
                  id='Ellipse_3-50'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-535 -132)'>
                <circle
                  id='Ellipse_3-51'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-493 -132)'>
                <circle
                  id='Ellipse_3-52'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-451 -132)'>
                <circle
                  id='Ellipse_3-53'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-409 -132)'>
                <circle
                  id='Ellipse_3-54'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-367 -132)'>
                <circle
                  id='Ellipse_3-55'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-325 -132)'>
                <circle
                  id='Ellipse_3-56'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-577 -100)'>
                <circle
                  id='Ellipse_3-57'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-535 -100)'>
                <circle
                  id='Ellipse_3-58'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-493 -100)'>
                <circle
                  id='Ellipse_3-59'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-451 -100)'>
                <circle
                  id='Ellipse_3-60'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-409 -100)'>
                <circle
                  id='Ellipse_3-61'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-367 -100)'>
                <circle
                  id='Ellipse_3-62'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
              <g transform='translate(-325 -100)'>
                <circle
                  id='Ellipse_3-63'
                  data-name='Ellipse 3'
                  cx='6'
                  cy='6'
                  r='6'
                  transform='translate(577 356)'
                  fill='#103734'
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
