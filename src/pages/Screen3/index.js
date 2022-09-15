import React from 'react';
import './index.css';

export default function Screen2() {
  const categories = [
    'Piano',
    'Singing',
    'Guitar',
    'Violin',
    'Drum',
    'Cello',
    'Saxophone',
    'Bass guitar',
    'Ukulele',
  ];

  return (
    <div className='screen screen3'>
      <div className='screenData'>
        <div>
          {/* <div className='tag'>Our Categories</div>
          <div className='title'>We offer 30+ Categories</div> */}
        </div>
        <div className='screenName'>
          <div className='screenNameTitle'>
            Music
            <div className='devider'></div>
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='742.72'
            height='160.16'
            viewBox='0 0 742.72 160.16'
          >
            <path
              id='Path_894'
              data-name='Path 894'
              d='M194.48,0l-.44-154H158.18l-52.8,88.88L51.26-154H15.4V0H55.66V-79.42L95.04-15.18H114.4L154-81.62,154.44,0ZM296.34,3.08c45.54,0,72.38-25.74,72.38-71.72V-154h-42.9v84.04c0,26.4-11,36.96-29.04,36.96-18.26,0-29.26-10.56-29.26-36.96V-154H223.96v85.36C223.96-22.66,250.8,3.08,296.34,3.08Zm155.98,0c45.76,0,68.2-22.88,68.2-49.72,0-56.76-87.34-39.16-87.34-62.7,0-7.7,6.6-13.86,24.86-13.86,13.42,0,27.94,3.96,42.68,11.88l13.42-32.34c-15.18-8.8-35.86-13.42-55.88-13.42-45.76,0-68.2,22.44-68.2,49.94,0,57.2,87.56,39.38,87.56,63.8,0,7.48-7.04,12.54-25.08,12.54-17.82,0-37.18-6.16-50.82-15.18l-14.3,32.12C401.94-3.74,427.02,3.08,452.32,3.08ZM540.54,0H584.1V-154H540.54ZM691.9,3.08c28.38,0,51.26-10.34,66.22-29.04L730.4-51.04C720.72-39.38,708.84-33,694.1-33c-25.3,0-42.9-17.6-42.9-44s17.6-44,42.9-44c14.74,0,26.62,6.38,36.3,18.04l27.72-25.08c-14.96-18.7-37.84-29.04-66.22-29.04-48.84,0-84.7,33.22-84.7,80.08S643.06,3.08,691.9,3.08Z'
              transform='translate(-15.4 157.08)'
              fill='#f6f8f7'
            />
          </svg>
        </div>
        <div className='categories'>
          {categories.map((category) => (
            <div className='category'>{category}</div>
          ))}
        </div>
      </div>
      <div className='screenImg'></div>
    </div>
  );
}
