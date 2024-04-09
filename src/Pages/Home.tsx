import React from 'react';
import SimpleSlider from "./SimpleSlider";
/* Styles */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Styles/App.css';

function Home() {
  return (
      <section className="Home">
          <div className="Main-slider">
              <SimpleSlider/>
          </div>
          <h1>Welcome to our Store!</h1>
      </section>
  );
}

export default Home;
