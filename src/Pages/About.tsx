import React from 'react';
import '../Styles/Pages/About.css';
import '../Styles/Pages/Home.css';
import Newsletter from "../Sections/Newsletter";
import SimpleSlider from "../Sections/SimpleSlider";
import ProductsSlider from "../Sections/ProductsSlider";

function About() {
    const slides = ["../Images/small-slide1.jpg",
        "../Images/small-slide2.jpg",
        "../Images/small-slide3.jpg",
        "../Images/small-slide4.jpg",
        "../Images/small-slide5.jpg"];
  return (
      <section className="About">
          <div className="container">
              <h1>Welcome to DFEi Store</h1>
              <div className="wrapper">
                  <div className="content">
                      <p>At DFEi Store, we are passionate about providing top-quality headphones to elevate your audio
                          experience. Our mission is to offer a curated selection of headphones that combine exceptional
                          sound quality with stylish design.</p>
                      <p>With a dedicated team of experts, we strive to bring you the latest innovations in audio
                          technology. Whether you're looking for wireless earbuds for on-the-go convenience or over-ear
                          headphones for immersive listening sessions, we've got you covered.</p>
                      <p>DFEi Store was founded on the belief that everyone deserves to enjoy music in its purest form.
                          We
                          are committed to sourcing headphones from reputable brands known for their superior
                          craftsmanship
                          and audio performance.</p>
                      <p>Explore our website to discover our collection of headphones and accessories designed to
                          enhance
                          your audio journey. If you have any questions or need assistance, don't hesitate to reach out
                          to
                          our friendly customer support team.</p>
                      <p>Thank you for choosing DFEi Store!</p>
                  </div>
                  <div className="image">
                      <img src="./Images/product1-3.jpg" alt="About"/>
                  </div>
              </div>
          </div>
          <Newsletter/>
          <ProductsSlider/>
          <div className="Main-slider">
              <SimpleSlider images={slides} alt={"About"}/>
          </div>
      </section>
  );
}

export default About;
