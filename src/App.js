import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Testimonial from './components/Testimonials';
import Donors from './components';

import 'tailwindcss/tailwind.css';

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Mission />
      <Testimonial />
    </div>
  );
}
