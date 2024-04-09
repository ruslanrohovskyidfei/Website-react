import React from 'react';
import '../Styles/App.css';
import SimpleSlider from "../Sections/SimpleSlider";
import Newsletter from "../Sections/Newsletter";
import ProductsSlider from "../Sections/ProductsSlider";

function Help() {
  return (
      <section className="Help">
          <div className="container">
              <h1>Welcome to SoundScape Help Center</h1>

              <h2>Introduction:</h2>
              <p>Welcome to the SoundScape Help Center! Whether you're new to shopping for headphones or a seasoned
                  audiophile, we're here to assist you every step of the way. Below you'll find answers to common
                  questions, troubleshooting tips, and ways to get in touch with our support team.</p>

              <h2>FAQs (Frequently Asked Questions):</h2>
              <div className="faq-item">
                  <p className="faq-question">1. How do I choose the right headphones for me?</p>
                  <p>We understand that selecting the perfect headphones can be overwhelming. Check out our
                      comprehensive buying guide <a className="link" href="#">here</a> for tips on choosing the right
                      headphones based on your preferences and needs.</p>
              </div>
              <div className="faq-item">
                  <p className="faq-question">2. What payment methods do you accept?</p>
                  <p>We accept all major credit cards, PayPal, and other secure payment methods for your
                      convenience.</p>
              </div>
              <div className="faq-item">
                  <p className="faq-question">3. Do you offer international shipping?</p>
                  <p>Yes, we offer international shipping to most countries. Shipping rates and delivery times may vary
                      depending on your location. For more information, please refer to our shipping policy <a
                          className="link" href="#">here</a>.</p>
              </div>

              <h2>Getting Started:</h2>
              <p>New to SoundScape? Follow these simple steps to start your headphone shopping experience:</p>
              <ol>
                  <li>Create an Account: Click <a className="link" href="#">here</a> to create an account and enjoy
                      personalized recommendations, order tracking, and exclusive deals.
                  </li>
                  <li>Browse Our Catalog: Explore our wide selection of headphones, sorted by brand, type, price range,
                      and more.
                  </li>
                  <li>Add to Cart: Found the perfect pair of headphones? Click "Add to Cart" and proceed to checkout to
                      complete your purchase securely.
                  </li>
              </ol>
          </div>
          <Newsletter/>
          <ProductsSlider />
          <div className="Main-slider">
              <SimpleSlider/>
          </div>
      </section>
  );
}

export default Help;
