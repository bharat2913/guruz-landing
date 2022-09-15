import React from 'react';
import DashboardCarousel from '../../Components/DashboardCarousel';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Blogs from '../Blogs';
import FAQ from '../FAQ';
import Screen1 from '../Screen1';
import Screen2 from '../Screen2';
import Screen3 from '../Screen3';
import Screen4 from '../Screen4';
import Screen5 from '../Screen5';
import Testimonials from '../Testimonials';
import './index.css';

export default function LandingPage() {
  return (
    <div className='landingPage'>
      <Header />
      <DashboardCarousel />
      <Screen1 />
      <Screen2 />
      <Screen3 />
      <Screen4 />
      <Screen5 />
      <Testimonials />
      <Blogs />
      <FAQ />
      <Footer />
    </div>
  );
}
