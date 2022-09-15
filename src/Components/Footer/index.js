import React from 'react';
import './index.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footerSection'>
        <div className='getInTouch'>
          <div style={{ color: '#494949', marginBottom: '2rem' }}>
            Get In Touch
          </div>

          <div className='contact'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='12.571'
                viewBox='0 0 16 12.571'
              >
                <path
                  id='Icon_ionic-md-mail'
                  data-name='Icon ionic-md-mail'
                  d='M16.726,5.625H3.774A1.528,1.528,0,0,0,2.25,7.149v9.524A1.528,1.528,0,0,0,3.774,18.2H16.726a1.528,1.528,0,0,0,1.524-1.524V7.149A1.528,1.528,0,0,0,16.726,5.625Zm-.19,3.238-6.286,4.19L3.964,8.863V7.339l6.286,4.19,6.286-4.19Z'
                  transform='translate(-2.25 -5.625)'
                  fill='#f5a041'
                />
              </svg>
              support@appie.com
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='11.2'
                height='16'
                viewBox='0 0 11.2 16'
              >
                <path
                  id='Icon_material-location-on'
                  data-name='Icon material-location-on'
                  d='M13.1,3A5.6,5.6,0,0,0,7.5,8.6c0,4.2,5.6,10.4,5.6,10.4s5.6-6.2,5.6-10.4A5.6,5.6,0,0,0,13.1,3Zm0,7.6a2,2,0,1,1,2-2A2,2,0,0,1,13.1,10.6Z'
                  transform='translate(-7.5 -3)'
                  fill='#f5a041'
                />
              </svg>
              3280 Diane Street, City Of Commerce, California, United States
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
              >
                <path
                  id='Icon_awesome-phone-alt'
                  data-name='Icon awesome-phone-alt'
                  d='M15.544,11.307l-3.5-1.5a.75.75,0,0,0-.875.216l-1.55,1.894A11.583,11.583,0,0,1,4.081,6.379l1.894-1.55a.748.748,0,0,0,.216-.875l-1.5-3.5A.755.755,0,0,0,3.831.019L.581.769A.75.75,0,0,0,0,1.5,14.5,14.5,0,0,0,14.5,16a.75.75,0,0,0,.731-.581l.75-3.25a.759.759,0,0,0-.438-.863Z'
                  transform='translate(0 0)'
                  fill='#f5a041'
                />
              </svg>
              805-427-4149
            </div>
          </div>
          <div className='socials'>
            <svg
              id='Icon_simple-facebook'
              data-name='Icon simple-facebook'
              xmlns='http://www.w3.org/2000/svg'
              width='25.085'
              height='24.932'
              viewBox='0 0 25.085 24.932'
            >
              <path
                id='Icon_simple-facebook-2'
                data-name='Icon simple-facebook'
                d='M25.085,12.542a12.542,12.542,0,1,0-14.5,12.39V16.168H7.4V12.542h3.185V9.779c0-3.143,1.873-4.88,4.737-4.88a19.289,19.289,0,0,1,2.808.245V8.231H16.546A1.813,1.813,0,0,0,14.5,10.19v2.353h3.479l-.556,3.626H14.5v8.764A12.545,12.545,0,0,0,25.085,12.542Z'
                fill='#494949'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25.088'
              height='20.39'
              viewBox='0 0 25.088 20.39'
            >
              <path
                id='Icon_simple-twitter'
                data-name='Icon simple-twitter'
                d='M25.039,5.8a10.453,10.453,0,0,1-2.953.81,5.183,5.183,0,0,0,2.261-2.846A10.623,10.623,0,0,1,21.078,5a5.141,5.141,0,0,0-8.9,3.51,5.263,5.263,0,0,0,.133,1.175,14.566,14.566,0,0,1-10.6-5.358,5.04,5.04,0,0,0-.7,2.587,5.144,5.144,0,0,0,2.287,4.281A5.126,5.126,0,0,1,.976,10.55v.064A5.146,5.146,0,0,0,5.1,15.659a5.19,5.19,0,0,1-2.312.089A5.16,5.16,0,0,0,7.6,19.32a10.315,10.315,0,0,1-6.378,2.2A10.916,10.916,0,0,1,0,21.45a14.629,14.629,0,0,0,7.9,2.309A14.527,14.527,0,0,0,22.532,9.14c0-.218,0-.439-.016-.659a10.386,10.386,0,0,0,2.571-2.663L25.039,5.8Z'
                transform='translate(0 -3.369)'
                fill='#494949'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='21.963'
              height='21.958'
              viewBox='0 0 21.963 21.958'
            >
              <path
                id='Icon_awesome-instagram'
                data-name='Icon awesome-instagram'
                d='M10.979,7.587a5.63,5.63,0,1,0,5.63,5.63A5.621,5.621,0,0,0,10.979,7.587Zm0,9.29a3.66,3.66,0,1,1,3.66-3.66,3.667,3.667,0,0,1-3.66,3.66Zm7.173-9.52a1.313,1.313,0,1,1-1.313-1.313A1.31,1.31,0,0,1,18.152,7.357Zm3.729,1.333a6.5,6.5,0,0,0-1.774-4.6,6.541,6.541,0,0,0-4.6-1.774c-1.813-.1-7.247-.1-9.06,0a6.532,6.532,0,0,0-4.6,1.769,6.52,6.52,0,0,0-1.774,4.6c-.1,1.813-.1,7.247,0,9.06a6.5,6.5,0,0,0,1.774,4.6,6.549,6.549,0,0,0,4.6,1.774c1.813.1,7.247.1,9.06,0a6.5,6.5,0,0,0,4.6-1.774,6.541,6.541,0,0,0,1.774-4.6c.1-1.813.1-7.242,0-9.055Zm-2.342,11a3.706,3.706,0,0,1-2.087,2.087c-1.445.573-4.875.441-6.473.441s-5.032.127-6.473-.441a3.706,3.706,0,0,1-2.087-2.087c-.573-1.445-.441-4.875-.441-6.473s-.127-5.032.441-6.473A3.706,3.706,0,0,1,4.506,4.657c1.445-.573,4.875-.441,6.473-.441s5.032-.127,6.473.441a3.706,3.706,0,0,1,2.087,2.087c.573,1.445.441,4.875.441,6.473S20.112,18.249,19.539,19.689Z'
                transform='translate(0.005 -2.238)'
                fill='#494949'
              />
            </svg>
          </div>
        </div>
        <div className='footerimg'>
          <img src='/assets/footerImg.png' alt='footerImg' />
        </div>
        <div className='quickLinks'>
          <div style={{ color: '#494949', marginBottom: '2rem' }}>
            Quick Links
          </div>

          <div className='links'>
            <div>Home</div>
            <div>App Features</div>
            <div>Testimonials</div>
            <div>Blog</div>
            <div>FAQ </div>
          </div>
        </div>
      </div>
      <div className='footerCopyright'>
        <div>Copyright © 2022 Guruz. All rights reserved.</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span>Privacy Policy</span>
          <span>Terms & Conditions </span>
        </div>
      </div>
    </footer>
  );
}
