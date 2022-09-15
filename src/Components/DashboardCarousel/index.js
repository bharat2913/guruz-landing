import React from 'react';
import './index.css';
import Carousel from 're-carousel';
import IndicatorDots from './indicator-dots';
import Buttons from './buttons';

export default function DashboardCarousel() {
  return (
    <div className='dashboardCarouselWrapper'>
      <Carousel
        auto
        className='dashboardCarousel'
        widgets={[IndicatorDots, Buttons]}
      >
        <div className='carauselScreen'>
          <img src='/assets/main_1.png' alt='main_1' />
          <CarouselContent />
        </div>
        <div className='carauselScreen'>
          <img src='/assets/main_2.png' alt='main_2' />
          <CarouselContent />
        </div>
        <div className='carauselScreen'>
          <img src='/assets/main_3.png' alt='main_3' />
          <CarouselContent />
        </div>
        <div className='carauselScreen'>
          <img src='/assets/main_4.png' alt='main_4' />
          <CarouselContent />
        </div>
      </Carousel>
      {/* <div className='fadeOut'></div> */}
    </div>
  );
}

const CarouselContent = () => {
  return (
    <div className='carauselContent'>
      <div className='heroText'>
        Upskill Your Passion With <span>Guruz App</span>
      </div>
      <div className='downloadsBtns'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='251.329'
            height='76.431'
            viewBox='0 0 251.329 76.431'
          >
            <g
              id='Group_8487'
              data-name='Group 8487'
              transform='translate(-203 -850)'
            >
              <path
                id='Path_921'
                data-name='Path 921'
                d='M241.614,76.427H9.715A9.715,9.715,0,0,1,0,66.712v-57A9.715,9.715,0,0,1,9.715,0h231.9a9.715,9.715,0,0,1,9.715,9.715v57a9.715,9.715,0,0,1-9.715,9.715'
                transform='translate(203 850.004)'
              />
              <path
                id='Path_922'
                data-name='Path 922'
                d='M418.314,226.5h3.505v7.95a11.135,11.135,0,0,1-3.591,1.881,13.781,13.781,0,0,1-4.218.656,11.373,11.373,0,0,1-5.5-1.325A9.841,9.841,0,0,1,404.664,232a10.65,10.65,0,0,1,0-10.544,9.82,9.82,0,0,1,3.861-3.662,11.517,11.517,0,0,1,5.543-1.325,12.1,12.1,0,0,1,4.559.827,8.95,8.95,0,0,1,3.448,2.422L419.739,222a7.5,7.5,0,0,0-5.5-2.28,7.773,7.773,0,0,0-3.747.883,6.438,6.438,0,0,0-2.565,2.479,7.131,7.131,0,0,0-.926,3.647,7.018,7.018,0,0,0,.926,3.591,6.633,6.633,0,0,0,2.565,2.508,7.511,7.511,0,0,0,3.719.912,8.025,8.025,0,0,0,4.1-1.026Z'
                transform='translate(-132.947 669.666)'
                fill='#fff'
              />
              <path
                id='Path_923'
                data-name='Path 923'
                d='M537.955,260.082a7.268,7.268,0,0,1-2.892-2.779,8.308,8.308,0,0,1,0-8.05,7.3,7.3,0,0,1,2.892-2.764,9.235,9.235,0,0,1,8.349,0,7.307,7.307,0,0,1,2.892,2.764,8.308,8.308,0,0,1,0,8.05,7.273,7.273,0,0,1-2.892,2.779,9.236,9.236,0,0,1-8.349,0m7.409-3.363a5.277,5.277,0,0,0,0-6.9,4.353,4.353,0,0,0-3.249-1.311,4.305,4.305,0,0,0-3.234,1.311,5.321,5.321,0,0,0,0,6.9,4.3,4.3,0,0,0,3.234,1.311,4.351,4.351,0,0,0,3.249-1.311'
                transform='translate(-241.874 645.491)'
                fill='#fff'
              />
              <path
                id='Path_924'
                data-name='Path 924'
                d='M648.055,260.082a7.267,7.267,0,0,1-2.892-2.779,8.308,8.308,0,0,1,0-8.05,7.3,7.3,0,0,1,2.892-2.764,9.235,9.235,0,0,1,8.349,0,7.307,7.307,0,0,1,2.892,2.764,8.308,8.308,0,0,1,0,8.05,7.273,7.273,0,0,1-2.892,2.779,9.236,9.236,0,0,1-8.349,0m7.409-3.363a5.277,5.277,0,0,0,0-6.9,4.352,4.352,0,0,0-3.249-1.311,4.305,4.305,0,0,0-3.234,1.311,5.322,5.322,0,0,0,0,6.9,4.3,4.3,0,0,0,3.234,1.311,4.351,4.351,0,0,0,3.249-1.311'
                transform='translate(-333.594 645.491)'
                fill='#fff'
              />
              <path
                id='Path_925'
                data-name='Path 925'
                d='M770.579,245.662v12.909q0,8.036-8.207,8.036a15.23,15.23,0,0,1-4.16-.556,8.829,8.829,0,0,1-3.249-1.61l1.6-2.679a7.624,7.624,0,0,0,2.522,1.325,9.892,9.892,0,0,0,3.092.5,5.105,5.105,0,0,0,3.676-1.14,4.659,4.659,0,0,0,1.168-3.476v-.8a5.854,5.854,0,0,1-2.223,1.51,7.833,7.833,0,0,1-2.878.513,8.255,8.255,0,0,1-3.918-.926,6.952,6.952,0,0,1-2.764-2.607,7.793,7.793,0,0,1,0-7.68A6.889,6.889,0,0,1,758,246.4a8.362,8.362,0,0,1,3.918-.912,8.034,8.034,0,0,1,3.006.542,5.551,5.551,0,0,1,2.266,1.653v-2.023Zm-4.8,10.3a4.111,4.111,0,0,0,1.3-3.149,4.034,4.034,0,0,0-1.3-3.106,5.242,5.242,0,0,0-6.668,0,4.033,4.033,0,0,0-1.3,3.106,4.11,4.11,0,0,0,1.3,3.149,5.195,5.195,0,0,0,6.668,0'
                transform='translate(-425.314 645.492)'
                fill='#fff'
              />
              <rect
                id='Rectangle_1813'
                data-name='Rectangle 1813'
                width='3.562'
                height='21.144'
                transform='translate(349.938 885.226)'
                fill='#fff'
              />
              <path
                id='Path_926'
                data-name='Path 926'
                d='M937.518,254.411h-11.94a4.137,4.137,0,0,0,1.638,2.664,5.371,5.371,0,0,0,3.291.983,5.546,5.546,0,0,0,4.132-1.653l1.909,2.194a6.43,6.43,0,0,1-2.593,1.852,10.277,10.277,0,0,1-7.95-.37,7.179,7.179,0,0,1-2.949-2.779,7.843,7.843,0,0,1-1.04-4.032,7.962,7.962,0,0,1,1.011-4,7.178,7.178,0,0,1,2.807-2.778,8.189,8.189,0,0,1,4.046-1,7.984,7.984,0,0,1,3.975.983,6.965,6.965,0,0,1,2.736,2.764,8.384,8.384,0,0,1,.983,4.118q0,.371-.057,1.054m-10.529-5.058a4.256,4.256,0,0,0-1.439,2.693h8.635a4.2,4.2,0,0,0-1.4-2.679,4.248,4.248,0,0,0-2.907-1.026,4.3,4.3,0,0,0-2.892,1.012'
                transform='translate(-565.097 645.491)'
                fill='#fff'
              />
              <path
                id='Path_927'
                data-name='Path 927'
                d='M1097.584,219.034a6.566,6.566,0,0,1,2.949,2.451,7.487,7.487,0,0,1,0,7.566,6.534,6.534,0,0,1-2.949,2.465,11.045,11.045,0,0,1-4.517.855h-4.5v5.756h-3.7V218.179h8.207a11.042,11.042,0,0,1,4.517.855m-1.012,9.176a4.062,4.062,0,0,0,0-5.87,5.691,5.691,0,0,0-3.676-1.026h-4.332v7.922h4.332a5.691,5.691,0,0,0,3.676-1.026'
                transform='translate(-700.756 668.244)'
                fill='#fff'
              />
              <rect
                id='Rectangle_1814'
                data-name='Rectangle 1814'
                width='3.562'
                height='21.144'
                transform='translate(404.451 885.226)'
                fill='#fff'
              />
              <path
                id='Path_928'
                data-name='Path 928'
                d='M1261.624,247.1a6.225,6.225,0,0,1,1.781,4.859v8.919h-3.363v-1.852a4.143,4.143,0,0,1-1.866,1.525,7.3,7.3,0,0,1-2.921.527,7.16,7.16,0,0,1-2.992-.584,4.62,4.62,0,0,1-1.981-1.624,4.119,4.119,0,0,1-.7-2.351,4.029,4.029,0,0,1,1.524-3.291,7.571,7.571,0,0,1,4.8-1.24h3.932v-.228a3.119,3.119,0,0,0-.955-2.451,4.131,4.131,0,0,0-2.835-.855,8.19,8.19,0,0,0-2.522.4,6.208,6.208,0,0,0-2.095,1.111l-1.4-2.593a8.65,8.65,0,0,1,2.878-1.4,12.809,12.809,0,0,1,3.562-.484,7.422,7.422,0,0,1,5.144,1.61m-3.249,10.772a3.333,3.333,0,0,0,1.468-1.753v-1.767h-3.676q-3.078,0-3.078,2.023a1.816,1.816,0,0,0,.769,1.539,3.525,3.525,0,0,0,2.137.57,4.6,4.6,0,0,0,2.379-.613'
                transform='translate(-837.981 645.491)'
                fill='#fff'
              />
              <path
                id='Path_929'
                data-name='Path 929'
                d='M1358.147,246.516l-7.124,16.442a7.657,7.657,0,0,1-2.422,3.491,5.8,5.8,0,0,1-3.448,1.012,7.088,7.088,0,0,1-2.251-.37,4.983,4.983,0,0,1-1.824-1.026l1.425-2.622a3.875,3.875,0,0,0,1.211.769,3.709,3.709,0,0,0,1.411.285,2.428,2.428,0,0,0,1.553-.484,4.288,4.288,0,0,0,1.126-1.624l.256-.6-6.64-15.274h3.7l4.787,11.256,4.816-11.256Z'
                transform='translate(-914.201 644.638)'
                fill='#fff'
              />
              <path
                id='Path_930'
                data-name='Path 930'
                d='M275.176,195.5l-9.576-5.526-7.875,7.613,7.2,6.958,10.253-5.919a1.805,1.805,0,0,0,0-3.126'
                transform='translate(-11.701 691.742)'
                fill='#ffd109'
              />
              <path
                id='Path_931'
                data-name='Path 931'
                d='M127.341,94.94,116.8,88.857,93.71,77.023l26.083,25.213Z'
                transform='translate(124.934 785.836)'
                fill='#06ef79'
              />
              <path
                id='Path_932'
                data-name='Path 932'
                d='M96.006,267.935,118.755,255.4l9.82-5.669-6.87-6.641Z'
                transform='translate(123.021 647.49)'
                fill='#f93646'
              />
              <path
                id='Path_933'
                data-name='Path 933'
                d='M84.356,83.134l-.025,50.92,26.35-25.472Z'
                transform='translate(132.747 780.745)'
                fill='#05d5fb'
              />
              <path
                id='Path_934'
                data-name='Path 934'
                d='M412.984,89.909a4.925,4.925,0,0,1-2.249-.526,5.951,5.951,0,0,1-1.819-1.414,6.685,6.685,0,0,1-1.207-2,6.31,6.31,0,0,1-.431-2.3,6.486,6.486,0,0,1,1.629-4.327,5.584,5.584,0,0,1,1.81-1.353,5.252,5.252,0,0,1,2.267-.491,5.333,5.333,0,0,1,2.93.741,4.766,4.766,0,0,1,1.741,1.931L416.466,81A3.584,3.584,0,0,0,415,79.411a4.154,4.154,0,0,0-2.051-.517,3.592,3.592,0,0,0-1.689.4,4.05,4.05,0,0,0-1.3,1.077,4.931,4.931,0,0,0-.827,1.543,5.685,5.685,0,0,0-.284,1.793,5.339,5.339,0,0,0,.319,1.853,4.773,4.773,0,0,0,.9,1.534,4.348,4.348,0,0,0,1.362,1.043,3.755,3.755,0,0,0,1.672.379,4.011,4.011,0,0,0,2-.535,6.056,6.056,0,0,0,1.793-1.637v1.6a4.977,4.977,0,0,1-3.913,1.965m3.723-5.016H414.07V83.721h3.947v6.1h-1.31Z'
                transform='translate(-136.288 785.44)'
                fill='#fff'
              />
              <path
                id='Path_935'
                data-name='Path 935'
                d='M494.062,88.875v1.379h-8.309V78.015h8.153v1.379h-6.6v3.965h5.74v1.293h-5.74v4.223Z'
                transform='translate(-201.663 785.009)'
                fill='#fff'
              />
              <path
                id='Path_936'
                data-name='Path 936'
                d='M551.2,79.393h-4.223v10.86h-1.551V79.393H541.2V78.014h10Z'
                transform='translate(-247.856 785.01)'
                fill='#fff'
              />
              <rect
                id='Rectangle_1815'
                data-name='Rectangle 1815'
                width='1.551'
                height='12.239'
                transform='translate(308.948 863.024)'
                fill='#fff'
              />
              <path
                id='Path_937'
                data-name='Path 937'
                d='M663.051,80.876v9.377H661.5V78.015h1.31l7.481,9.567v-9.55h1.551V90.254h-1.413Z'
                transform='translate(-348.07 785.01)'
                fill='#fff'
              />
              <path
                id='Path_938'
                data-name='Path 938'
                d='M768.139,89.91a5.24,5.24,0,0,1-2.344-.517,5.7,5.7,0,0,1-1.819-1.4,6.586,6.586,0,0,1-1.594-4.284,6.294,6.294,0,0,1,.44-2.336,6.506,6.506,0,0,1,1.224-1.982,5.914,5.914,0,0,1,1.836-1.379,5.2,5.2,0,0,1,2.293-.508,5.1,5.1,0,0,1,2.344.534,5.779,5.779,0,0,1,1.81,1.431,6.738,6.738,0,0,1,1.172,2,6.441,6.441,0,0,1-1.232,6.576,5.8,5.8,0,0,1-1.836,1.37,5.269,5.269,0,0,1-2.293.5M763.951,83.7a5.461,5.461,0,0,0,.3,1.8,4.968,4.968,0,0,0,.853,1.543,4.128,4.128,0,0,0,1.327,1.069,3.73,3.73,0,0,0,1.724.4,3.675,3.675,0,0,0,1.758-.414,4.139,4.139,0,0,0,1.319-1.1,5.031,5.031,0,0,0,.827-1.552,5.517,5.517,0,0,0,.285-1.741,5.392,5.392,0,0,0-.3-1.793,5.025,5.025,0,0,0-.862-1.543,4.106,4.106,0,0,0-1.328-1.069,3.965,3.965,0,0,0-3.456.017,4.049,4.049,0,0,0-1.319,1.095,5.205,5.205,0,0,0-.836,1.543,5.343,5.343,0,0,0-.293,1.75'
                transform='translate(-432.111 785.439)'
                fill='#fff'
              />
              <path
                id='Path_939'
                data-name='Path 939'
                d='M845.92,80.876v9.377h-1.551V78.015h1.31l7.481,9.567v-9.55h1.551V90.254H853.3Z'
                transform='translate(-500.412 785.01)'
                fill='#fff'
              />
            </g>
          </svg>
        </div>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='251.328'
            height='76.431'
            viewBox='0 0 251.328 76.431'
          >
            <g
              id='Group_8488'
              data-name='Group 8488'
              transform='translate(0 -96.183)'
            >
              <path
                id='Path_898'
                data-name='Path 898'
                d='M241.616,652.589H9.717A9.715,9.715,0,0,1,0,642.874v-57a9.715,9.715,0,0,1,9.715-9.715h231.9a9.715,9.715,0,0,1,9.715,9.715v57a9.715,9.715,0,0,1-9.715,9.715'
                transform='translate(-0.002 -479.975)'
              />
              <g id='Group_8486' data-name='Group 8486'>
                <path
                  id='Path_899'
                  data-name='Path 899'
                  d='M126.687,731.829c-4.077,7.075-1.485,17.812,3.023,24.322,2.251,3.255,4.529,6.177,7.65,6.177.058,0,.118,0,.178,0a9.437,9.437,0,0,0,3.55-.946,9.721,9.721,0,0,1,4.206-1,9.147,9.147,0,0,1,4,.964,8.478,8.478,0,0,0,3.835.92c3.515-.065,5.674-3.218,7.578-6a26.583,26.583,0,0,0,3.32-6.8l.013-.043a.4.4,0,0,0-.21-.485l-.028-.013A10.075,10.075,0,0,1,157.7,739.7a10.371,10.371,0,0,1,4.9-8.671l.039-.025a.394.394,0,0,0,.112-.555,11.405,11.405,0,0,0-8.972-4.872c-.254-.026-.518-.038-.782-.038a15.633,15.633,0,0,0-5.631,1.406,9.041,9.041,0,0,1-2.7.806,8.822,8.822,0,0,1-2.79-.815,13.525,13.525,0,0,0-4.918-1.249l-.124,0a12.057,12.057,0,0,0-10.149,6.144'
                  transform='translate(-103.844 -604.416)'
                  fill='#fff'
                />
                <path
                  id='Path_900'
                  data-name='Path 900'
                  d='M249.521,657.036a11.009,11.009,0,0,0-7.269,3.729,10.314,10.314,0,0,0-2.612,7.649.4.4,0,0,0,.361.343c.168.013.34.02.511.02a9.316,9.316,0,0,0,6.862-3.52,10.875,10.875,0,0,0,2.556-7.869.4.4,0,0,0-.409-.352'
                  transform='translate(-199.583 -547.351)'
                  fill='#fff'
                />
                <path
                  id='Path_901'
                  data-name='Path 901'
                  d='M470.932,680.6h4.726a6.915,6.915,0,0,1,3.3.768A5.613,5.613,0,0,1,481.2,683.5a6.315,6.315,0,0,1,0,6.16,5.613,5.613,0,0,1-2.244,2.124,6.918,6.918,0,0,1-3.3.768h-4.726Zm4.658,11.159a6.233,6.233,0,0,0,2.918-.657,4.7,4.7,0,0,0,1.945-1.834,5.666,5.666,0,0,0,0-5.392,4.7,4.7,0,0,0-1.945-1.834,6.237,6.237,0,0,0-2.918-.657H471.8v10.374Z'
                  transform='translate(-392.315 -566.985)'
                  fill='#fff'
                />
                <path
                  id='Path_902'
                  data-name='Path 902'
                  d='M550.07,706.851a4.176,4.176,0,0,1-1.6-1.612,4.966,4.966,0,0,1,0-4.658,4.181,4.181,0,0,1,1.6-1.612,4.762,4.762,0,0,1,4.556,0,4.183,4.183,0,0,1,1.6,1.612,4.966,4.966,0,0,1,0,4.658,4.178,4.178,0,0,1-1.6,1.612,4.762,4.762,0,0,1-4.556,0m4.112-.665a3.43,3.43,0,0,0,1.28-1.331,4.266,4.266,0,0,0,0-3.89,3.433,3.433,0,0,0-1.28-1.331,3.76,3.76,0,0,0-3.668,0,3.431,3.431,0,0,0-1.28,1.331,4.267,4.267,0,0,0,0,3.89,3.428,3.428,0,0,0,1.28,1.331,3.76,3.76,0,0,0,3.668,0'
                  transform='translate(-456.431 -581.8)'
                  fill='#fff'
                />
                <path
                  id='Path_903'
                  data-name='Path 903'
                  d='M620.112,698.8l-3.378,8.907h-.8l-3-7.729-3.02,7.729h-.785l-3.378-8.907h.819l2.969,7.951,3.037-7.951h.734l3.02,7.934,3-7.934Z'
                  transform='translate(-504.624 -582.14)'
                  fill='#fff'
                />
                <path
                  id='Path_904'
                  data-name='Path 904'
                  d='M710.659,699.361a3.788,3.788,0,0,1,.973,2.8v5.2h-.853v-5.136a3.162,3.162,0,0,0-.759-2.286,2.818,2.818,0,0,0-2.124-.785,3.275,3.275,0,0,0-2.474.939,3.485,3.485,0,0,0-.9,2.525v4.743h-.853v-8.907h.819v1.928a3.39,3.39,0,0,1,1.374-1.467,4.232,4.232,0,0,1,2.158-.529,3.574,3.574,0,0,1,2.645.973'
                  transform='translate(-586.195 -581.8)'
                  fill='#fff'
                />
                <rect
                  id='Rectangle_1812'
                  data-name='Rectangle 1812'
                  width='0.853'
                  height='12.661'
                  transform='translate(128.951 112.903)'
                  fill='#fff'
                />
                <path
                  id='Path_905'
                  data-name='Path 905'
                  d='M795.474,706.851a4.175,4.175,0,0,1-1.6-1.612,4.966,4.966,0,0,1,0-4.658,4.18,4.18,0,0,1,1.6-1.612,4.762,4.762,0,0,1,4.556,0,4.182,4.182,0,0,1,1.6,1.612,4.966,4.966,0,0,1,0,4.658,4.177,4.177,0,0,1-1.6,1.612,4.762,4.762,0,0,1-4.556,0m4.112-.665a3.432,3.432,0,0,0,1.28-1.331,4.268,4.268,0,0,0,0-3.89,3.435,3.435,0,0,0-1.28-1.331,3.76,3.76,0,0,0-3.668,0,3.429,3.429,0,0,0-1.28,1.331,4.266,4.266,0,0,0,0,3.89,3.426,3.426,0,0,0,1.28,1.331,3.76,3.76,0,0,0,3.668,0'
                  transform='translate(-660.866 -581.8)'
                  fill='#fff'
                />
                <path
                  id='Path_906'
                  data-name='Path 906'
                  d='M863.833,699.233a3.269,3.269,0,0,1,.887,2.483v5.648H863.9v-1.587a2.963,2.963,0,0,1-1.246,1.22,4.132,4.132,0,0,1-1.962.435,3.614,3.614,0,0,1-2.346-.7,2.419,2.419,0,0,1-.068-3.643,3.812,3.812,0,0,1,2.534-.691h3.054v-.716a2.509,2.509,0,0,0-.674-1.894,2.736,2.736,0,0,0-1.971-.649,4.751,4.751,0,0,0-1.7.307,4.265,4.265,0,0,0-1.374.819l-.427-.614a4.74,4.74,0,0,1,1.6-.93,5.828,5.828,0,0,1,1.962-.333,3.545,3.545,0,0,1,2.542.845M862.7,706.22a3.113,3.113,0,0,0,1.169-1.484v-1.672H860.83a3.025,3.025,0,0,0-1.9.478,1.6,1.6,0,0,0-.589,1.314,1.645,1.645,0,0,0,.648,1.374,2.916,2.916,0,0,0,1.826.5,3.35,3.35,0,0,0,1.885-.512'
                  transform='translate(-714.339 -581.8)'
                  fill='#fff'
                />
                <path
                  id='Path_907'
                  data-name='Path 907'
                  d='M925.042,676.31v12.661h-.836v-2.1a3.823,3.823,0,0,1-1.484,1.6,4.186,4.186,0,0,1-2.167.563,4.426,4.426,0,0,1-2.252-.58,4.15,4.15,0,0,1-1.578-1.6,4.711,4.711,0,0,1-.572-2.337,4.761,4.761,0,0,1,.572-2.346,4.078,4.078,0,0,1,1.578-1.6,4.482,4.482,0,0,1,2.252-.572,4.109,4.109,0,0,1,2.141.563,4.011,4.011,0,0,1,1.493,1.57V676.31Zm-2.6,11.483a3.433,3.433,0,0,0,1.28-1.331,4.267,4.267,0,0,0,0-3.89,3.436,3.436,0,0,0-1.28-1.331,3.76,3.76,0,0,0-3.669,0,3.43,3.43,0,0,0-1.28,1.331,4.266,4.266,0,0,0,0,3.89,3.427,3.427,0,0,0,1.28,1.331,3.76,3.76,0,0,0,3.669,0'
                  transform='translate(-763.211 -563.407)'
                  fill='#fff'
                />
                <path
                  id='Path_908'
                  data-name='Path 908'
                  d='M1013.586,706.851a4.173,4.173,0,0,1-1.6-1.612,4.964,4.964,0,0,1,0-4.658,4.178,4.178,0,0,1,1.6-1.612,4.762,4.762,0,0,1,4.556,0,4.182,4.182,0,0,1,1.6,1.612,4.965,4.965,0,0,1,0,4.658,4.177,4.177,0,0,1-1.6,1.612,4.762,4.762,0,0,1-4.556,0m4.112-.665a3.431,3.431,0,0,0,1.28-1.331,4.267,4.267,0,0,0,0-3.89,3.435,3.435,0,0,0-1.28-1.331,3.76,3.76,0,0,0-3.668,0,3.428,3.428,0,0,0-1.28,1.331,4.266,4.266,0,0,0,0,3.89,3.425,3.425,0,0,0,1.28,1.331,3.76,3.76,0,0,0,3.668,0'
                  transform='translate(-842.567 -581.8)'
                  fill='#fff'
                />
                <path
                  id='Path_909'
                  data-name='Path 909'
                  d='M1087.6,699.361a3.788,3.788,0,0,1,.973,2.8v5.2h-.853v-5.136a3.162,3.162,0,0,0-.759-2.286,2.818,2.818,0,0,0-2.124-.785,3.275,3.275,0,0,0-2.474.939,3.485,3.485,0,0,0-.9,2.525v4.743h-.853v-8.907h.819v1.928a3.389,3.389,0,0,1,1.374-1.467,4.232,4.232,0,0,1,2.158-.529,3.574,3.574,0,0,1,2.645.973'
                  transform='translate(-900.212 -581.8)'
                  fill='#fff'
                />
                <path
                  id='Path_910'
                  data-name='Path 910'
                  d='M1172.756,697.433a2.143,2.143,0,0,1-.811.469,3.19,3.19,0,0,1-1.015.162,2.4,2.4,0,0,1-1.792-.64,2.428,2.428,0,0,1-.631-1.783v-5.818h-1.638v-.734h1.638v-1.945h.853v1.945h2.832v.734h-2.832v5.733a1.881,1.881,0,0,0,.418,1.322,1.6,1.6,0,0,0,1.237.452,1.98,1.98,0,0,0,1.382-.495Z'
                  transform='translate(-972.074 -572.433)'
                  fill='#fff'
                />
                <path
                  id='Path_911'
                  data-name='Path 911'
                  d='M1223.334,680.968a3.788,3.788,0,0,1,.973,2.8v5.2h-.853v-5.136a3.162,3.162,0,0,0-.759-2.286,2.818,2.818,0,0,0-2.124-.785,3.275,3.275,0,0,0-2.474.939,3.485,3.485,0,0,0-.9,2.525v4.743h-.853V676.31h.853v5.614a3.269,3.269,0,0,1,1.365-1.425,4.318,4.318,0,0,1,2.133-.5,3.574,3.574,0,0,1,2.645.973'
                  transform='translate(-1013.285 -563.407)'
                  fill='#fff'
                />
                <path
                  id='Path_912'
                  data-name='Path 912'
                  d='M1287.9,703.114h-7.661a3.718,3.718,0,0,0,.529,1.851,3.384,3.384,0,0,0,1.339,1.254,4.027,4.027,0,0,0,1.9.444,4.073,4.073,0,0,0,1.612-.316,3.139,3.139,0,0,0,1.237-.93l.495.563a3.8,3.8,0,0,1-1.459,1.075,5.081,5.081,0,0,1-4.274-.2,4.205,4.205,0,0,1-1.63-1.6,4.6,4.6,0,0,1-.589-2.338,4.843,4.843,0,0,1,.555-2.329,4.092,4.092,0,0,1,1.527-1.612,4.414,4.414,0,0,1,4.36-.009,4.067,4.067,0,0,1,1.519,1.6,4.8,4.8,0,0,1,.554,2.321Zm-5.921-3.558a3.187,3.187,0,0,0-1.2,1.177,3.833,3.833,0,0,0-.52,1.715h6.825a3.573,3.573,0,0,0-.512-1.706,3.313,3.313,0,0,0-2.9-1.6,3.413,3.413,0,0,0-1.689.418'
                  transform='translate(-1065.82 -581.8)'
                  fill='#fff'
                />
                <path
                  id='Path_913'
                  data-name='Path 913'
                  d='M466.137,832.035H455.931l-2.012,4.724h-3.907l9.185-20.411h3.732l9.214,20.411h-3.966Zm-1.254-2.974-3.849-8.923-3.82,8.923Z'
                  transform='translate(-374.888 -680.068)'
                  fill='#fff'
                />
                <path
                  id='Path_914'
                  data-name='Path 914'
                  d='M608.731,845.285a7.155,7.155,0,0,1,2.814,2.8,9.057,9.057,0,0,1,0,8.354,7.121,7.121,0,0,1-2.814,2.814,8.264,8.264,0,0,1-4.068.991,6.286,6.286,0,0,1-4.986-2.1V865.7h-3.645V844.469h3.47v2.041a5.639,5.639,0,0,1,2.231-1.662,7.539,7.539,0,0,1,2.93-.554,8.27,8.27,0,0,1,4.068.991m-1.166,10.5a5.445,5.445,0,0,0,0-7.056,4.407,4.407,0,0,0-3.31-1.341,4.691,4.691,0,0,0-2.362.6,4.321,4.321,0,0,0-1.662,1.706,5.683,5.683,0,0,0,0,5.132,4.316,4.316,0,0,0,1.662,1.706,4.686,4.686,0,0,0,2.362.6,4.406,4.406,0,0,0,3.31-1.341'
                  transform='translate(-496.532 -703.349)'
                  fill='#fff'
                />
                <path
                  id='Path_915'
                  data-name='Path 915'
                  d='M728.551,845.285a7.155,7.155,0,0,1,2.814,2.8,9.058,9.058,0,0,1,0,8.354,7.121,7.121,0,0,1-2.814,2.814,8.264,8.264,0,0,1-4.068.991,6.286,6.286,0,0,1-4.986-2.1V865.7h-3.645V844.469h3.47v2.041a5.64,5.64,0,0,1,2.231-1.662,7.539,7.539,0,0,1,2.93-.554,8.27,8.27,0,0,1,4.068.991m-1.166,10.5a5.445,5.445,0,0,0,0-7.056,4.407,4.407,0,0,0-3.31-1.341,4.691,4.691,0,0,0-2.362.6,4.32,4.32,0,0,0-1.662,1.706,5.682,5.682,0,0,0,0,5.132,4.315,4.315,0,0,0,1.662,1.706,4.686,4.686,0,0,0,2.362.6,4.406,4.406,0,0,0,3.31-1.341'
                  transform='translate(-596.349 -703.349)'
                  fill='#fff'
                />
                <path
                  id='Path_916'
                  data-name='Path 916'
                  d='M879.153,834.924a9.514,9.514,0,0,1-3.484-1.779l1.312-2.945a10.321,10.321,0,0,0,3.076,1.618,11.179,11.179,0,0,0,3.659.627,6.322,6.322,0,0,0,3.4-.729,2.208,2.208,0,0,0,1.122-1.924,1.865,1.865,0,0,0-.627-1.443,4.411,4.411,0,0,0-1.589-.889q-.962-.321-2.624-.729a30.522,30.522,0,0,1-3.776-1.108,6.209,6.209,0,0,1-2.479-1.735,4.672,4.672,0,0,1-1.035-3.193,5.447,5.447,0,0,1,.919-3.076,6.214,6.214,0,0,1,2.77-2.2,11.224,11.224,0,0,1,4.534-.816,14.666,14.666,0,0,1,3.674.466,10.165,10.165,0,0,1,3.12,1.341l-1.2,2.945a11.823,11.823,0,0,0-2.8-1.2,10.483,10.483,0,0,0-2.828-.408,5.908,5.908,0,0,0-3.339.758,2.339,2.339,0,0,0-1.093,2.012,1.818,1.818,0,0,0,.627,1.429,4.524,4.524,0,0,0,1.589.875q.962.321,2.624.729a27.616,27.616,0,0,1,3.732,1.093,6.4,6.4,0,0,1,2.493,1.735,4.574,4.574,0,0,1,1.035,3.149,5.377,5.377,0,0,1-.918,3.062,6.247,6.247,0,0,1-2.785,2.187,11.339,11.339,0,0,1-4.549.816,15.578,15.578,0,0,1-4.563-.671'
                  transform='translate(-729.487 -678.612)'
                  fill='#fff'
                />
                <path
                  id='Path_917'
                  data-name='Path 917'
                  d='M992.772,842.9a4.291,4.291,0,0,1-1.56.787,7.032,7.032,0,0,1-1.939.262,5.5,5.5,0,0,1-3.965-1.341,5.161,5.161,0,0,1-1.4-3.907v-7.494h-2.566v-2.916h2.566v-3.557h3.645v3.557h4.17v2.916h-4.17v7.406a2.461,2.461,0,0,0,.554,1.735,2.078,2.078,0,0,0,1.6.6,3.2,3.2,0,0,0,2.041-.642Z'
                  transform='translate(-817.519 -687.052)'
                  fill='#fff'
                />
                <path
                  id='Path_918'
                  data-name='Path 918'
                  d='M1061,859.223a7.437,7.437,0,0,1-2.96-2.843,8.5,8.5,0,0,1,0-8.237,7.471,7.471,0,0,1,2.96-2.828,9.45,9.45,0,0,1,8.543,0,7.479,7.479,0,0,1,2.96,2.828,8.5,8.5,0,0,1,0,8.237,7.444,7.444,0,0,1-2.96,2.843,9.45,9.45,0,0,1-8.543,0m7.581-3.441a5.4,5.4,0,0,0,0-7.056,4.455,4.455,0,0,0-3.324-1.341,4.407,4.407,0,0,0-3.31,1.341,5.445,5.445,0,0,0,0,7.056,4.4,4.4,0,0,0,3.31,1.341,4.453,4.453,0,0,0,3.324-1.341'
                  transform='translate(-880.525 -703.349)'
                  fill='#fff'
                />
                <path
                  id='Path_919'
                  data-name='Path 919'
                  d='M1186.328,844.294v3.47a4.623,4.623,0,0,0-.846-.087,4.4,4.4,0,0,0-3.324,1.239,4.941,4.941,0,0,0-1.2,3.572v7.552h-3.645V844.469h3.47v2.274q1.575-2.449,5.54-2.449'
                  transform='translate(-980.779 -703.349)'
                  fill='#fff'
                />
                <path
                  id='Path_920'
                  data-name='Path 920'
                  d='M1257.109,853.421h-12.218a4.235,4.235,0,0,0,1.677,2.726,5.5,5.5,0,0,0,3.368,1.006,5.676,5.676,0,0,0,4.228-1.691l1.953,2.245a6.581,6.581,0,0,1-2.653,1.9,10.516,10.516,0,0,1-8.135-.379,7.347,7.347,0,0,1-3.018-2.843,8.024,8.024,0,0,1-1.064-4.126,8.146,8.146,0,0,1,1.035-4.1,7.343,7.343,0,0,1,2.872-2.843,8.381,8.381,0,0,1,4.141-1.021,8.168,8.168,0,0,1,4.068,1.006,7.127,7.127,0,0,1,2.8,2.828,8.578,8.578,0,0,1,1.006,4.213q0,.379-.058,1.079m-10.774-5.176a4.354,4.354,0,0,0-1.472,2.755h8.835a4.3,4.3,0,0,0-1.429-2.741,4.346,4.346,0,0,0-2.974-1.05,4.4,4.4,0,0,0-2.96,1.035'
                  transform='translate(-1034.036 -703.349)'
                  fill='#fff'
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
