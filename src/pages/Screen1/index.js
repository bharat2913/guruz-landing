import React, { useState } from 'react';
import { Explore, Calender, Message, Dollor } from '../../assets/svg';
import './index.css';

export default function Screen1() {
  const [tab, setTab] = useState(1);

  return (
    <div className='screen1'>
      <div className='horizontalTabs'>
        <div
          className={`horizontalTab ${tab === 1 && 'selected'}`}
          onClick={() => setTab(1)}
        >
          <div className='svg'>
            <Explore />
          </div>
          <div className='tabText'>Explore and find guruz</div>
        </div>
        <div
          className={`horizontalTab ${tab === 2 && 'selected'}`}
          onClick={() => setTab(2)}
        >
          <div className='svg'>
            <Message />
          </div>
          <div className='tabText'>Individual and Group Messages</div>
        </div>
        <div
          className={`horizontalTab ${tab === 3 && 'selected'}`}
          onClick={() => setTab(3)}
        >
          <div className='svg'>
            <Calender />
          </div>
          <div className='tabText'>Enroll Batches Nearby</div>
        </div>
        <div
          className={`horizontalTab ${tab === 4 && 'selected'}`}
          onClick={() => setTab(4)}
        >
          <div className='svg'>
            <Calender />
          </div>
          <div className='tabText'>View and Manage Batches</div>
        </div>
        <div
          className={`horizontalTab ${tab === 5 && 'selected'}`}
          onClick={() => setTab(5)}
        >
          <div className='svg'>
            <Dollor />
          </div>
          <div className='tabText'>Fees Management</div>
        </div>
      </div>
      <div className='screenBody'>
        <div className='tabImage'>
          <img src='/assets/guruxPhnDashboard.png' alt='guruxPhnDashboard' />
        </div>
        <div className='bodyData'>
          <div className='tag'>Students Feature</div>
          <div className='title'>Explore & find guruz</div>
          <div className='saperate'></div>
          <div className='descp'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </div>

          <div className='actions'>
            <div className='action'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='24.562'
                viewBox='0 0 20 24.562'
              >
                <path
                  id='Icon_metro-apple'
                  data-name='Icon metro-apple'
                  d='M22.14,14.979A5.557,5.557,0,0,1,24.791,10.3,5.736,5.736,0,0,0,20.3,7.868c-1.913-.194-3.732,1.126-4.7,1.126s-2.466-1.1-4.053-1.069a6.009,6.009,0,0,0-5.081,3.079C4.3,14.764,5.909,20.332,8.02,23.38c1.032,1.492,2.262,3.168,3.877,3.108,1.555-.062,2.143-1.006,4.024-1.006s2.409,1.006,4.055.976c1.674-.031,2.734-1.521,3.758-3.017a13.539,13.539,0,0,0,1.7-3.493,5.425,5.425,0,0,1-3.3-4.968ZM19.047,5.85a5.413,5.413,0,0,0,1.278-3.922,5.506,5.506,0,0,0-3.617,1.86,5.149,5.149,0,0,0-1.3,3.8A4.555,4.555,0,0,0,19.047,5.85Z'
                  transform='translate(-5.436 -1.928)'
                  fill='#2e2e2e'
                />
              </svg>
              <div>
                Available on the <br />
                <span> App Store</span>
              </div>
            </div>
            <div className='action'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18.029'
                height='20'
                viewBox='0 0 18.029 20'
              >
                <path
                  id='Icon_awesome-google-play'
                  data-name='Icon awesome-google-play'
                  d='M13.5,9.154,4.877.508l10.971,6.3L13.5,9.154ZM2.627,0a1.519,1.519,0,0,0-.848,1.379V18.621A1.519,1.519,0,0,0,2.627,20L12.652,10ZM19.239,8.814l-2.3-1.332L14.371,10l2.567,2.52,2.348-1.332A1.567,1.567,0,0,0,19.239,8.814ZM4.877,19.5l10.971-6.3L13.5,10.85Z'
                  transform='translate(-1.779)'
                  fill='#494949'
                />
              </svg>
              <div>
                Available on the <br />
                <span> Google Play</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
