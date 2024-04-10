import React from 'react';
import SimpleSlider from "../Sections/SimpleSlider";
/* Styles */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/Pages/Home.css';
import Newsletter from "../Sections/Newsletter";
import SingleSlider from "../Sections/SingleSlider";
import ProductsSlider from "../Sections/ProductsSlider";
import {NavLink} from "react-router-dom";

function Home() {
  const generalSliderImages: string[] = ["../Images/general-slide1.jpg", "../Images/general-slide2.jpg"];
  return (
      <section className="Home">
          <div className="General-slider">
              <SingleSlider mainSlider={true} images={generalSliderImages} alt={"General slider"} />
              <div className="welcome-text">
                  <p>Welcome to SoundScape!</p>
                  <p>Your ultimate destination for premium headphones and audio accessories!</p>
                  <div className="home-button">
                      <NavLink className={"link"} to="/shop">Shop</NavLink>
                  </div>
              </div>
          </div>
          <div className="container">
              <div className="home-content-wrapper">
                  <div className="home-content-inner-wrapper">
                      <h1 className="home-title">Welcome to SoundScape!</h1>
                      <div className="home-subtitle">
                          Your ultimate destination for premium headphones and audio accessories! Immerse yourself in a
                          world of
                          superior sound quality and cutting-edge technology as you explore our curated collection of
                          headphones
                          from renowned brands around the globe.
                          At SoundScape, we believe that every beat, every note, and every rhythm deserves to be heard
                          in
                          its
                          purest form. That's why we offer a diverse range of headphones tailored to meet the needs of
                          audiophiles, gamers, fitness enthusiasts, and music lovers alike. Whether you're seeking crisp
                          highs,
                          deep bass, or immersive surround sound, we have the perfect pair of headphones to elevate your
                          listening experience to new heights.
                          Experience the difference with SoundScape. Your journey to superior sound starts here.
                      </div>
                  </div>
                  <div className="home-content-image-wrapper">
                      <img src="../Images/welcome.jpg" alt="Homepage"/>
                  </div>
              </div>
          </div>
          <Newsletter/>
          <ProductsSlider/>
      </section>
  );
}

export default Home;
