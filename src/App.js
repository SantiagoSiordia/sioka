import React from 'react';
import ImgCarousel from './components/carousel/ImgCarousel';
import Destinations from './components/destinations/Destinations';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Selects from './components/selects/Selects';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Selects />
      <ImgCarousel />
      <Footer />
    </div>
  );
}

export default App;
