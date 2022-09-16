import React from 'react';
import './index.css';

export default function Testimonials() {
  return (
    <div className='testimonials'>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ color: '#494949', fontSize: '14px', fontWeight: '600' }}>
          Client Testimonials
        </div>
        <div style={{ color: '#494949', fontSize: '32px', fontWeight: '600' }}>
          See what our customer Says!
        </div>
      </div>
      <div className='testimonial'>
        <div className='testimonialImg'>
          <img
            src='/assets/testimonials1.png'
            alt='testimonials1'
            style={{
              width: '180px',
            }}
          />
        </div>
        <div className='testimonialImg'>
          <img
            src='/assets/testimonials2.png'
            alt='testimonials2'
            style={{
              width: '235px',
            }}
          />
        </div>
        <div className='testimonialBody'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='132.913'
              height='125.905'
              viewBox='0 0 132.913 125.905'
            >
              <path
                id='Path_258'
                data-name='Path 258'
                d='M60.538-149.625Q43.864-146.483,37.1-125.459a66.073,66.073,0,0,0-3.383,20.541,14.825,14.825,0,0,0,.121,2.054q.121.846.362,3.746H60.538v52.682H9.064V-95.01q0-35.766,14.258-55.1t37.216-22.233Zm81.439,0q-13.291,2.175-20.179,14.983t-6.887,29.483q0,1.45.121,2.9a16.49,16.49,0,0,0,.6,3.142h26.341v52.682H90.262V-95.01q0-28.758,12.083-51.353t39.632-25.978Z'
                transform='translate(-9.064 172.341)'
                fill='#659b5e'
                opacity='0.913'
              />
            </svg>
          </div>
          <div
            className='testimonialText'
            style={{
              color: '#494949',
              fontSize: '14px',
              margin: '1rem 0',
              fontWeight: '600',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </div>
          <div
            style={{ color: '#494949', fontSize: '20px', fontWeight: '600' }}
            className='testimonialAuthor'
          >
            Mitchelle Marsh
          </div>
          <div
            style={{ color: '#494949', fontSize: '14px', fontWeight: '600' }}
            className='testimonialAuthorPosition'
          >
            Head Coach
          </div>
        </div>
        <div className='testimonialImg'>
          <img
            src='/assets/testimonials3.png'
            alt='testimonials3'
            style={{
              width: '180px',
            }}
          />
        </div>
      </div>
    </div>
  );
}
